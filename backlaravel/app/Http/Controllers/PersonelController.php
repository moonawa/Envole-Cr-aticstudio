<?php

namespace App\Http\Controllers;

use App\Models\Personel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PersonelController extends Controller
{
    public function index(){
        //$personel =  User::where('role', 2)->get();
       
        $personel =  Personel::with('user')->get();
        return response()->json($personel, 200);
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
    //création d'un  Superdmin
    public function createSuperdmin(Request $request){
      $pass = $this->motDePasse(8);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($pass);
        $user->role = 1;
        $user->status = "Activé";
        $user->avatar = $request->avatar;

        $user->save();

        $personel = new Personel();
        $personel->metier = $request->metier;
        $personel->user_id = $user->id;
        $personel->save();

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

    //création d'un admin = personnel simple
    public function createAdmin(Request $request){
        // $data['name'] = $request['name'];
        // $data['email'] = $request['email'];
        // $data['telephone'] = $request['telephone'];
        // $data['password'] = $request['password'];
        // $data['role'] = 2;
        // $data['status'] = 1;
        //User::create($data);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($request->password);
        $user->role = 2;
        $user->status = "Activé"; 
        $imageName =  $request->file('avatar')->hashName();
        Storage::disk('public')->put($imageName, file_get_contents($request->file('avatar')));
        $user->avatar = $imageName;
        $user->save();

        $personnel = new Personel();
        $personnel->metier = $request->metier;
        $personnel->user_id = $user->id;
        $personnel->save();

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      public function get($id){
        $data = Personel::with('user')->find($id);
        return response()->json($data, 200);
      }
  public function update(Request $request, $id)
    {
        $data['datecasting'] = $request['datecasting'];
        $data['namecasting'] = $request['namecasting'];
        $data['descriptioncasting'] = $request['descriptioncasting'];
        $data['colaborateur_id'] = $request['colaborateur_id'];
        
        Personel::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }

    public function searchNomPersonel(Request $request){
        // $querys = Casting::query();
    $datas = $request->input('search_personel');
    if($datas){
      $querys = User::with('personel')->where('name', 'LIKE', '%'.$datas.'%')->
                        get();
  
        return $querys;
    } }

    public function searchMetierPersonel(Request $request){
        // $querys = Casting::query();
    $datas = $request->input('search_metier');
    if($datas){
      $querys = Personel::with('user')->where('metier', 'LIKE', '%'.$datas.'%')->
                        get();
  
        return $querys;
    }        
  }
}
