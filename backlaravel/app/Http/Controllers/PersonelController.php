<?php

namespace App\Http\Controllers;

use App\Models\Personel;
use App\Models\User;
use Illuminate\Http\Request;

class PersonelController extends Controller
{
    public function index(){
        //$personel =  User::where('role', 2)->get();
       
        $personel =  Personel::with('user')->get();
        return response()->json($personel, 200);
    }

    //création d'un  Superdmin
    public function createSuperdmin(Request $request){
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($request->password);
        $user->role = 1;
        $user->status = 1;
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
        $user->name = $request('name');
        $user->email = $request('email');
        $user->telephone = $request('telephone');
        $user->password = bcrypt($request('password'));
        $user->role = 2;
        $user->status = 1;
        $user->save();

        $personnel = new Personel();
        $user->metier = $request('metier');
        $user->user_id = $user->id;
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
  
}
