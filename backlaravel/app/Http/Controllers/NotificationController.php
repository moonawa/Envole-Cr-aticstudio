<?php

namespace App\Http\Controllers;

use App\Models\Colaborateur;
use App\Models\User;
use App\Notifications\PasswordNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth');
    }
  
    public function index()
    {
        return view('product');
    }
    
    public function sendNotification() {
        //$userSchema = Colaborateur::with('user')->first();
        $userSchema = User::first();

        $password = [
            'greeting' => 'Bonjour ',
            'body' => 'Votre mot de passe est :  '. $userSchema->password.' , vous pouvez le changer une fois connecté',
            'thanks' => 'Merci ',
            'actionText' => 'Connectez Vous à ',
            'actionURL' => url('/'),
            'order_id' => 101
        ];
        
  
        Notification::send($userSchema, new PasswordNotification($password));
   
        dd('Task completed!');
    }
}
