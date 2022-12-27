<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidatController;
use App\Http\Controllers\CastingController;
use App\Http\Controllers\ColaborateurController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PersonelController;
use App\Http\Controllers\SelectionController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('send', [NotificationController::class, 'sendNotification']);


// Route::post('/login', [AuthController::class, 'login']);
// Route::get('/user', [AuthController::class, 'getUser']);

// Route::middleware('jwt.verify')->group(function() {
//     Route::get('/dashboard', function() {
//         return response()->json(['message' => 'Welcome to dashboard'], 200);
//     });
// });
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return Auth::user();
});
Route::get('users', function(){
    return User::all();
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('user-profile', [AuthController::class, 'userProfile']);
    Route::post('/forgot', [ForgotPasswordController::class, 'forgot']);
    Route::post('/reset', [ForgotPasswordController::class, 'reset']);
    Route::get('/castingClientconncete',[ CastingController::class, 'castingClientconncete']);  
    
});

//route pour personel

Route::prefix('personel')->group(function () {
    Route::get('/',[ PersonelController::class, 'index']);
    Route::post('/super',[ PersonelController::class, 'createSuperdmin']);
    Route::post('/',[ PersonelController::class, 'createAdmin']);
    Route::get('/search_personel',[ PersonelController::class, 'searchNomPersonel']);
    Route::get('/search_metier',[ PersonelController::class, 'searchMetierPersonel']);
    //Route::delete('/{id}',[ PersonelController::class, 'delete']);
    Route::get('/{id}',[ PersonelController::class, 'get']);
    Route::put('/{id}',[ PersonelController::class, 'update']);
});

//route pour candidat casting_candidat
Route::prefix('candidats')->group(function () {
    Route::get('/',[ CandidatController::class, 'index']);
    Route::post('/',[ CandidatController::class, 'createCandidat']);
    Route::get('/indexcount',[ CandidatController::class, 'indexcount']);
    Route::post('/multipleCandidat',[ CandidatController::class, 'multipleCandidat']);
    Route::get('/candidatFemme',[ CandidatController::class, 'candidatFemme']);
    Route::get('/candidatHomme',[ CandidatController::class, 'candidatHomme']);
    Route::get('/mineur',[ CandidatController::class, 'mineur']);
    Route::get('/majeur',[ CandidatController::class, 'majeur']);
    Route::get('/search_candidat',[ CandidatController::class, 'searchCandidat']);
    Route::get('/search_many',[ CandidatController::class, 'searchMany']);
    Route::get('/search_name',[ CandidatController::class, 'searchName']);
    Route::get('/search_age',[ CandidatController::class, 'searchAge']);
    Route::get('/search_teint',[ CandidatController::class, 'searchTeint']);
    Route::get('/search_sexe',[ CandidatController::class, 'searchSexe']);
    //Route::delete('/{id}',[ CandidatController::class, 'delete']);
    Route::post('/ajoutcancas', [ CandidatController::class, 'alloueParcandidatID']);
    Route::get('/casting/{id}',[ CandidatController::class, 'getCasting']);
    Route::get('/{id}',[ CandidatController::class, 'get']);
    Route::put('/{id}',[ CandidatController::class, 'update']);
    Route::post('/casting_candidat',[ CandidatController::class, 'casting_candidat']);
        Route::post('/casting_candidat',[ CandidatController::class, 'casting_candidat']);

});

//route pour colaborateur
Route::prefix('colaborateur')->group(function () {
    Route::get('/',[ ColaborateurController::class, 'index']);
    Route::post('/',[ ColaborateurController::class, 'createColaborateur']);
    //Route::delete('/{id}',[ ColaborateurController::class, 'delete']);
    Route::get('/search_colaborateur',[ ColaborateurController::class, 'searchColaborateur']);
    Route::get('/{id}',[ ColaborateurController::class, 'get']);
    Route::put('/{id}',[ ColaborateurController::class, 'update']);
});

//route pour fournisseur
Route::prefix('fournisseur')->group(function () {
    Route::get('/',[ FournisseurController::class, 'index']);
    Route::post('/',[ FournisseurController::class, 'store']);
    Route::get('/search_fourname',[ FournisseurController::class, 'searchfourname']);
    Route::get('/search_pays',[ FournisseurController::class, 'searchpays']);
    Route::get('/search_region',[ FournisseurController::class, 'searchregion']);
    Route::get('/search_prestation',[ FournisseurController::class, 'searchprestation']);
    //Route::delete('/{id}',[ FournisseurController::class, 'delete']);
    Route::get('/{id}',[ FournisseurController::class, 'get']);
    Route::put('/{id}',[ FournisseurController::class, 'update']);
});

//route pour selection
Route::prefix('selection')->group(function () {
    Route::get('/',[ SelectionController::class, 'index']);
    Route::post('/',[ SelectionController::class, 'store']);
    Route::get('/{id}',[ SelectionController::class, 'get']);
    Route::put('/{id}',[ SelectionController::class, 'update']);
    Route::delete('/{id}',[ SelectionController::class, 'supCandidat']);
});

//route pour casting
Route::prefix('casting')->group(function () {

    Route::get('/',[ CastingController::class, 'index']);
    Route::post('/',[ CastingController::class, 'store']);//store avec colaborateur
    Route::get('/indexcount',[ CastingController::class, 'indexcount']);
    Route::post('/createcasting',[ CastingController::class, 'createcasting']);
    Route::post('/note/{id}',[ CastingController::class, 'note']);
    Route::get('status/{id}',[CastingController::class, 'status']);
    Route::get('/search_casting', [ CastingController::class, 'searchCasting']);
    Route::get('/affiche_alloue', [ CastingController::class, 'afficheAlloue']);
    Route::get('/candidats/{id}', [ CastingController::class, 'candidats']);
    Route::get('/getCandidat/{id}', [ CastingController::class, 'getCandidat']);
    Route::post('/test', [ CastingController::class, 'alloueParID']);
    Route::post('/detach', [ CastingController::class, 'detach']);
    Route::get('/{id}',[ CastingController::class, 'get']);
    Route::put('/{id}',[ CastingController::class, 'update']);
    Route::post('/alloue',[ CastingController::class, 'alloue']);  

});

