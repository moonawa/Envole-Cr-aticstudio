<?php

namespace App\Http\Controllers;

use App\Models\Fournisseur;
use Illuminate\Http\Request;

class FournisseurController extends Controller
{
    public function index(){
        $fournisseur =  Fournisseur::get();
        return response()->json($fournisseur, 200);
    }
    public function store(Request $request){
        $fournisseur = new Fournisseur();
        $fournisseur->name_fournisseur = $request->name_fournisseur;
        $fournisseur->email_fournisseur = $request->email_fournisseur;
        $fournisseur->telephone_fournisseur = $request->telephone_fournisseur;
        $fournisseur->pays = $request->pays;
        $fournisseur->region = $request->region;
        $fournisseur->ville = $request->ville;
        $fournisseur->prestation = $request->prestation;
        $fournisseur->autre = $request->autre;
        $fournisseur->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }
}
