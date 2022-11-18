<?php

use App\Http\Controllers\CandidatController;
use App\Http\Controllers\CastingController;
use App\Http\Controllers\ColaborateurController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\PersonelController;
use App\Http\Controllers\SelectionController;
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
    Route::post('/',[ CandidatController::class, 'createCandidat']);
    Route::post('/multipleCandidat',[ CandidatController::class, 'multipleCandidat']);
    Route::get('/candidatFemme',[ CandidatController::class, 'candidatFemme']);
    Route::get('/candidatHomme',[ CandidatController::class, 'candidatHomme']);
    Route::get('/mineur',[ CandidatController::class, 'mineur']);
    Route::get('/majeur',[ CandidatController::class, 'majeur']);
    Route::get('/search_candidat',[ CandidatController::class, 'searchCandidat']);
    //Route::delete('/{id}',[ CandidatController::class, 'delete']);
    Route::get('/{id}',[ CandidatController::class, 'get']);
    Route::put('/{id}',[ CandidatController::class, 'update']);
    Route::post('/casting_candidat',[ CandidatController::class, 'casting_candidat']);
});

//route pour colaborateur
Route::prefix('colaborateur')->group(function () {
    Route::get('/',[ ColaborateurController::class, 'index']);
    Route::post('/',[ ColaborateurController::class, 'createColaborateur']);
    //Route::delete('/{id}',[ ColaborateurController::class, 'delete']);
    Route::get('/{id}',[ ColaborateurController::class, 'get']);
    Route::put('/{id}',[ ColaborateurController::class, 'update']);
});

//route pour fournisseur
Route::prefix('fournisseur')->group(function () {
    Route::get('/',[ FournisseurController::class, 'index']);
    Route::post('/',[ FournisseurController::class, 'store']);
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
    Route::post('/createcasting',[ CastingController::class, 'createcasting']);

    //Route::delete('/{id}',[ CastingController::class, 'delete']);
    Route::get('/search_casting', [ CastingController::class, 'searchCasting']);
    Route::get('/affiche_alloue', [ CastingController::class, 'afficheAlloue']);
    Route::get('/candidats/{id}', [ CastingController::class, 'candidats']);
    
    Route::get('/{id}',[ CastingController::class, 'get']);
    Route::put('/{id}',[ CastingController::class, 'update']);
    Route::post('/alloue',[ CastingController::class, 'alloue']);  
});