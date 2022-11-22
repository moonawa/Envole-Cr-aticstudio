<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use App\Models\Casting;
use App\Models\Colaborateur;
use App\Models\Selection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CastingController extends Controller
{
    public function searchCasting(Request $request){
              // $querys = Casting::query();
        $datas = $request->input('search_casting');
        if($datas){
           $querys = Casting::query()->where('namecasting', 'LIKE', '%'.$datas.'%')->
                             orWhere('datecasting', 'LIKE', '%'.$datas.'%')->
                             orWhere('descriptioncasting', 'LIKE', '%'.$datas.'%')->get();

            return $querys;
        }        
     }

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
        $casting->colaborateur_id = 1;

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

    // public function casting_candidat(Request $request, Casting $casting, Candidat $candidat)
    // {
    //     $note = '';
    //     if ($request->note) {
    //         $note = $request->note;
    //     }
    //     if ($casting->candidats()->save($candidat, array('note' => $note))) {
    //         return response()->json(['message' => 'Casting Candidat Created', 'data' => $candidat], 200);
    //     }
    //     return response()->json(['message' => 'Error', 'data' => null], 400);
    // }
    
    public function show(Casting $casting)
    {
        $casting->with('candidats')->get();
        return response()->json($casting, 200);
    }

    // public function candidat($id)
    // {
    //     $casting = Casting::with('colaborateur')->find($id);
    //     $casting->candidats()->attach($casting->cats);
    //     return response()->json([
    //         'message' => "Successfully updated",
    //         'success' => true
    //     ], 200);
    // }

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
    public function alloueParID(Request $request)
    {
        $id =  $request->id;
        $telephone_candidat =  $request->telephone_candidat;

        $casting =  Casting::where('id', $id)->first();
        $candidat = Candidat::where('telephone_candidat', $telephone_candidat)->get();

        $casting->candidats()->attach($candidat);
        return response()->json([
            'message' => "Successfully créé",
            'success' => true
        ], 200);
    }
    public function detach(Request $request)
    {
        $id = $request->id;
        $telephone_candidat = $request->telephone_candidat;
        $casting = Casting::where('id', $id)->first();
        $candidat = Candidat::where('telephone_candidat', $telephone_candidat)->get();
        $casting->candidats()->detach($candidat);
       // $casting->candidats()->detach($candidat->cats);
        return response()->json([
            'message' => "Successfully enlevé",
            'success' => true
        ], 200);
    }
    public function getCandidat($id){
        $casting = Casting::with('colaborateur')->where('id', $id); 
        $candidats = $casting->with('candidats')->get();
        return response()->json($candidats, 200);
    }
    public function candidats($id ){ 
        // $candidat = Casting::with('candidats')->where('id', $id); 
        // $r = $candidat->with('colaborateur')->first();
        // return response()->json($r, 200);

        $casting = Casting::with('colaborateur')->where('id', $id); 
        $candidats = $casting->with('candidats')->first();
        return response()->json($candidats, 200);

    }
   
    

    public function update(Request $request, $id)
    {
        $data['datecasting'] = $request['datecasting'];
        $data['namecasting'] = $request['namecasting'];
        $data['descriptioncasting'] = $request['descriptioncasting'];
        $data['colaborateur_id'] = $request['colaborateur_id'];
        
        Casting::find($id)->update($data);
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
    public function get($id){
        $data = Casting::with('colaborateur')->find($id);

      
        return response()->json($data, 200);
      }

     

      

      
}
