<?php

use App\Http\Controllers\CandidatController;
use App\Http\Controllers\CastingController;
use App\Http\Controllers\ColaborateurController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\PersonelController;
use Illuminate\Http\Request;
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

//route pour personel
Route::prefix('personel')->group(function () {
    Route::get('/',[ PersonelController::class, 'index']);
    Route::post('/super',[ PersonelController::class, 'createSuperdmin']);
    Route::post('/',[ PersonelController::class, 'createAdmin']);
    //Route::delete('/{id}',[ PersonelController::class, 'delete']);
    Route::get('/{id}',[ PersonelController::class, 'get']);
    Route::put('/{id}',[ PersonelController::class, 'update']);
});

//route pour candidat casting_candidat
Route::prefix('candidats')->group(function () {
    Route::get('/',[ CandidatController::class, 'index']);
    Route::get('/candidatFemme',[ CandidatController::class, 'candidatFemme']);
    Route::get('/candidatHomme',[ CandidatController::class, 'candidatHomme']);
    Route::get('/mineur',[ CandidatController::class, 'mineur']);
    Route::get('/majeur',[ CandidatController::class, 'majeur']);
    Route::post('/',[ CandidatController::class, 'createCandidat']);
    //Route::delete('/{id}',[ PersonelController::class, 'delete']);
    Route::get('/{id}',[ CandidatController::class, 'get']);
    Route::put('/{id}',[ CandidatController::class, 'update']);
    Route::post('/casting_candidat',[ CandidatController::class, 'casting_candidat']);
   
});

//route pour colaborateur
Route::prefix('colaborateur')->group(function () {
    Route::get('/',[ ColaborateurController::class, 'index']);
    Route::post('/',[ ColaborateurController::class, 'createColaborateur']);
    //Route::delete('/{id}',[ PersonelController::class, 'delete']);
    Route::get('/{id}',[ ColaborateurController::class, 'get']);
    Route::put('/{id}',[ ColaborateurController::class, 'update']);
});

//route pour fournisseur
Route::prefix('fournisseur')->group(function () {
    Route::get('/',[ FournisseurController::class, 'index']);
    Route::post('/',[ FournisseurController::class, 'store']);
    //Route::delete('/{id}',[ PersonelController::class, 'delete']);
    Route::get('/{id}',[ FournisseurController::class, 'get']);
    Route::put('/{id}',[ FournisseurController::class, 'update']);
});

//route pour casting
Route::prefix('casting')->group(function () {
    Route::get('/',[ CastingController::class, 'index']);
    Route::post('/',[ CastingController::class, 'store']);//store avec colaborateur
    Route::post('/createcasting',[ CastingController::class, 'createcasting']);
    //Route::delete('/{id}',[ CastingController::class, 'delete']);
    Route::get('/{id}',[ CastingController::class, 'get']);
    Route::put('/{id}',[ CastingController::class, 'update']);
    Route::post('/alloue',[ CastingController::class, 'alloue']);  
});