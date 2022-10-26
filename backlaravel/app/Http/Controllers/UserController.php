<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        //$data = User::get();
        $user =  !User::where('role', 3)->get();
        return response()->json($user, 200);
      }
      
}
