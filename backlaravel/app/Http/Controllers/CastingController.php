<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use App\Models\Casting;
use App\Models\Colaborateur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CastingController extends Controller
{
    public function index()
    {
        $casting =  Casting::with('colaborateur')->get();
        return response()->json($casting, 200);
    }

    //création d'un  casting
    public function createcasting(Request $request)
    {
        $casting = new Casting();
        $casting->datecasting = $request->datecasting;
        $casting->colaborateur_id = $request->colaborateur_id;
        $casting->descriptioncasting = $request->descriptioncasting;
        $casting->namecasting = $request->namecasting;
        $casting->statuscasting = "Encours";
        $casting->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    //création d'un  Colaborateur en meme temps un casting
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->telephone = $request->telephone;
        $user->password = bcrypt($request->password);
        $user->role = 3;
        $user->status = "Activé";
        $imageName =  $request->file('avatar')->hashName();
        Storage::disk('public')->put($imageName, file_get_contents($request->file('avatar')));
        $user->avatar = $imageName;
        $user->save();

        $colaborateur = new Colaborateur();
        $colaborateur->adresse_colaborateur = $request->adresse_colaborateur;
        $colaborateur->description_colaborateur = $request->description_colaborateur;
        $colaborateur->user_id = $user->id;
        $colaborateur->save();

        $casting = new Casting();
        $casting->datecasting = $request->datecasting;
        $casting->namecasting = $request->namecasting;
        $casting->descriptioncasting = $request->descriptioncasting;
        $casting->colaborateur_id = $colaborateur->id;
        $casting->statuscasting = "Encours";
        $casting->save();

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function casting_candidat(Request $request, Casting $casting, Candidat $candidat)
    {
        $note = '';
        if ($request->note) {
            $note = $request->note;
        }
        if ($casting->candidats()->save($candidat, array('note' => $note))) {
            return response()->json(['message' => 'Casting Candidat Created', 'data' => $candidat], 200);
        }
        return response()->json(['message' => 'Error', 'data' => null], 400);
    }
    
    public function show(Casting $casting)
    {
        $casting->with('candidats')->get();
        return response()->json($casting, 200);
    }

    public function candidat($id)
    {
        $casting = Casting::with('colaborateur')->find($id);
        $casting->candidats()->attach($casting->cats);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }

    public function alloue(Request $request)
    {
        $namecasting =  $request->namecasting;
        $telephone =  $request->telephone_candidat;

        //$casting = Casting::whereNamecasting($namecasting)->first();
        $casting =  Casting::where('namecasting', $namecasting)->first();
        $candidat = Candidat::where('telephone_candidat', $telephone)->get();

        $casting->candidats()->attach($candidat);
        return response()->json([
            'message' => "Successfully créé",
            'success' => true
        ], 200);
    }
    public function detach(Request $request)
    {
        $namecasting = $request->namecasting;
        $telephone = $request->telephone;
        $casting = Casting::where('namecasting', $namecasting)->first();
        $candidat = Candidat::where('telephone', $telephone)->get();
        $casting->candidats()->detach($candidat->cats);
        return response()->json([
            'message' => "Successfully enlevé",
            'success' => true
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $data['datecasting'] = $request['datecasting'];
        $data['namecasting'] = $request['namecasting'];
        $data['descriptioncasting'] = $request['descriptioncasting'];
        $data['colaborateur_id'] = $request['colaborateur_id'];
        
        Candidat::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
    public function updatestatus(Request $request, $id)
    {
         $data['statuscasting'] = $request['statuscasting'];
        
        Candidat::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
    public function get($id, Request $request){

        $data = Casting::find($id);


        return response()->json($data, 200);
      }
}
