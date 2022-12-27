<?php

namespace App\Http\Controllers;

use App\Models\Casting;
use App\Models\Colaborateur;
use App\Models\User;
use App\Notifications\PasswordNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;

class ColaborateurController extends Controller
{
    public function index(){
        //$colaborateur =  User::where('role', 3)->get();
        $colaborateur =  Colaborateur::with('user')->get();
        return response()->json($colaborateur, 200);
    }
    public function searchColaborateur(Request $request){
      // $querys = Casting::query();
    $datas = $request->input('search_colaborateur');
    if($datas){
      $querys = User::with('colaborateur')->where('name', 'LIKE', '%'.$datas.'%')->
                        get();

        return $querys;
    }        
  }


    //création d'un  Colaborateur
    public function createColaborateur(Request $request){
      $pass = $this->motDePasse(8);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($pass);
        $user->role = "Client";
        $user->status = "Activé"; 
        
        // $imageName =  $request->file('avatar')->hashName();
        // Storage::disk('public')->put($imageName, file_get_contents($request->file('avatar')));
        // $user->avatar = $imageName;

        $user->save();
        
       // Notification::send($user, new PasswordNotification($pass));
      
        $colaborateur = new Colaborateur();
        $colaborateur->adresse_colaborateur = $request->adresse_colaborateur;
        $colaborateur->description_colaborateur = $request->description_colaborateur;
        $colaborateur->user_id = $user->id;
        $colaborateur->save();
        
        $e=  $user->email;
        $p = $user->password;
        Mail::send('mail.password', ['password'=>$p], function ($message) use($e){
          $message->to($e);
          $message->subject('Mot de passe');
      });
        
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      public function motDePasse($longueur=5) { // par défaut, on affiche un mot de passe de 5 caractères
        // chaine de caractères qui sera mis dans le désordre:
        $Chaine = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 62 caractères au total
        // on mélange la chaine avec la fonction str_shuffle(), propre à PHP
        $Chaine = str_shuffle($Chaine);
        // ensuite on coupe à la longueur voulue avec la fonction substr(), propre à PHP aussi
        $Chaine = substr($Chaine,0,$longueur);
        // ensuite on retourne notre chaine aléatoire de "longueur" caractères:
        return $Chaine;
      }
      //pour les admins
      public function get($id){
        // $data = Colaborateur::with('user')->find($id);
        // return response()->json($data, 200);

        $colaborateur = Colaborateur::with('user')->where('id', $id); 
        $casting = $colaborateur->with('castings')->latest()->first();
        return response()->json($casting, 200);
      }

      
      public function candidatsClientconncete(){
        $user = Auth::user()->id;

        $colaborateur = Colaborateur::with('user')->where('user_id', $user); 
        $casting = $colaborateur->with('castings');
        $candidats = $casting->with('candidats')->first();
        return response()->json($candidats, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        Colaborateur::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
