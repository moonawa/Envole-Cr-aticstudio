<?php

namespace App\Http\Controllers;

use App\Models\Casting;
use App\Models\Colaborateur;
use App\Models\User;
use Illuminate\Http\Request;

class CastingController extends Controller
{
    public function index(){
        $casting =  Casting::get();
        return response()->json($casting, 200);
    }
    //création d'un  casting
    public function createcasting(Request $request){

        $casting = new Casting();
        $casting->date = $request->date;
        $casting->colaborateur_id = $request->name;
        $casting->description = $request->description;
        $casting->name = $request->colaborateur_id;
        $casting->status = 'Encours';

        $casting->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      //création d'un  Colaborateur en meme temps un casting
    public function CastingColaborateur(Request $request){

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
  
        $casting = new Casting();
        $casting->date = $request->date;
        $casting->name = $request->name;
        $casting->description = $request->description;
        $casting->colaborateur_id = $colaborateur->id;
        $casting->status = 'Encours';
        $casting->save();
  
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
}
