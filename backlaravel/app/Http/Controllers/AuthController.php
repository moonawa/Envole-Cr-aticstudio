<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $this->validate($request, [
            'email' => 'required|max:255',
            'password' => 'required'
        ]);
        $login = $request->only('email', 'password');
        if(!Auth::attempt($login)){
            return response(['message' => 'pas bon'], 401);
        }
        /**
         * @var User $user
         */
        
        $user = Auth::user();
        $token = $user->createToken($user->name);
        return response ([
            'id'  => $user->id,
            'name'  => $user->name,
            'email'  => $user->email,
            'telephone'  => $user->telephone,
            'created_at'  => $user->created_at,
            'updated_at'  => $user->updated_at,
            'token'  => $token->accessToken,
            'token_expires_at'  => $token->token->expires_at,

        ], 200);
    
    }
    //  public function logins(Request $request)
    //  {
    //      $data = [
    //          'email' => $request->email,
    //          'password' => $request->password
    //      ];
    //      if (auth()->attempt($data)) {
    //          $token = auth()->user()->createToken('Envole-Auth-Laravel-Angular')->accessToken;
    //          return response()->json(['token' => $token], 200);
    //      } else {
    //          return response()->json(['error' => 'Unauthorised'], 401);
    //      }

        
    //  }
 
    public function userInfo() 
    {
 
     $user = auth()->user();
      
     return response()->json(['user' => $user], 200);
 
    }
}
