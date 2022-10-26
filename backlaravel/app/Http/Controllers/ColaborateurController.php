<?php

namespace App\Http\Controllers;

use App\Models\Casting;
use App\Models\Colaborateur;
use App\Models\User;
use Illuminate\Http\Request;

class ColaborateurController extends Controller
{
    public function index(){
        //$colaborateur =  User::where('role', 3)->get();
        $colaborateur =  Colaborateur::with('user')->get();
        return response()->json($colaborateur, 200);
    }
    //création d'un  Colaborateur
    public function createColaborateur(Request $request){

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($request->password);
        $user->role = 3;
        $user->status = 1;
        $user->avatar = $request->avatar;

        $user->save();

        $colaborateur = new Colaborateur();
        $colaborateur->adresse = $request->adresse;
        $colaborateur->description = $request->description;
        $colaborateur->user_id = $user->id;
        $colaborateur->save();

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      
      public function get($id){
        $data = Colaborateur::with('user')->find($id);
        return response()->json($data, 200);
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
