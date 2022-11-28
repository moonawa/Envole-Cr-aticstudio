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
    public function searchfourname(Request $request)
    {
        $datas = $request->input('search_fourname');
        if($datas){
           $querys = Fournisseur::where('name_fournisseur', 'LIKE', '%'.$datas.'%')->get();

            return $querys;
        }   
    }
    public function searchpays(Request $request)
    {
        $datas = $request->input('search_pays');
        if($datas){
           $querys = Fournisseur::where('pays', 'LIKE', '%'.$datas.'%')->
                             get();

            return $querys;
        }   
    }
    public function searchregion(Request $request)
    {
        $datas = $request->input('search_region');
        if($datas){
            $querys = Fournisseur::where('region', 'LIKE', '%'.$datas.'%')->get();

            return $querys;
        }   
    }
    public function searchprestation(Request $request)
    {
        $datas = $request->input('search_prestation');
        if($datas){
           $querys = Fournisseur::where('prestation', 'LIKE', '%'.$datas.'%')->get();

            return $querys;
        }   
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
    public function update(Request $request, $id)
    {
        $data['name_fournisseur'] = $request['name_fournisseur'];
        $data['email_fournisseur'] = $request['email_fournisseur'];
        $data['telephone_fournisseur'] = $request['telephone_fournisseur'];
        $data['pays'] = $request['pays'];
        $data['region'] = $request['region'];
        $data['ville'] = $request['ville'];
        $data['prestation'] = $request['prestation'];
        $data['autre'] = $request['autre'];
        
        Fournisseur::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
    public function get($id){
        $data = Fournisseur::find($id);
        return response()->json($data, 200);
      }
}
