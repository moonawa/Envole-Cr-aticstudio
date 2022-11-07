<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use App\Models\Casting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CandidatController extends Controller
{
    public function index(){
        $candidat =  Candidat::get();
        return response()->json($candidat, 200);
    }
    public function candidatFemme() {
        //$count = DB::table('candidats')->count();
        $femme = Candidat::where('sexe', 'Femme')->get();
        return response()->json($femme, 200);
     }
     public function candidatHomme() {
        $femme = Candidat::where('sexe', 'Homme')->get();
        return response()->json($femme, 200);
     }
     public function mineur() {
        $mineur = Candidat::where('age','<', 17)->get();
        return response()->json($mineur, 200);
     }
     public function majeur() {
        $majeur = Candidat::where('age', '>', 18)->get();
        return response()->json($majeur, 200);
     }
    //création d'un  candidat
    public function createCandidat(Request $request){
        $candidat = new Candidat();
        $candidat->prenom = $request->prenom;
        $candidat->nom = $request->nom;
        $candidat->email_candidat = $request->email_candidat;
        $candidat->telephone_candidat = $request->telephone_candidat;
        $candidat->signe_particulier = $request->signe_particulier;
        $candidat->barbu = $request->barbu;

        $candidat->birthday = $request->birthday;
        //$age = Carbon::parse($request->birthday)->diff(Carbon::now())->y;
        $candidat->age = Carbon::parse($request->birthday)->diff(Carbon::now())->y;
        //dd($candidat->age . " ans"); 

        $candidat->selection_envole = $request->selection_envole;
        $candidat->experience_cinema = $request->experience_cinema;
        $candidat->quel_cinema = $request->quel_cinema;
        $candidat->combien_de_film = $request->combien_de_film;
        $candidat->experience_theatre = $request->experience_theatre;
        $candidat->combien_annee_theatre = $request->combien_annee_theatre;
        $candidat->adresse_candidat = $request->adresse_candidat;
        $candidat->appreciation = $request->appreciation;
        $candidat->taille = $request->taille;
        $candidat->profession = $request->profession;
        $candidat->poids = $request->poids;
        $candidat->teint = $request->teint;
        $candidat->sexe = $request->sexe;
        $candidat->situation_matrimoniale = $request->situation_matrimoniale;
        $candidat->campagne_publicitaire = $request->campagne_publicitaire;
        $candidat->nom_campagne_publicitaire = $request->nom_campagne_publicitaire;
        $candidat->enfant = $request->enfant;
        $candidat->langues_parlees = $request->langues_parlees;
        $candidat->role_interdit = $request->role_interdit;
        $candidat->role_souhaite = $request->role_souhaite;
        $candidat->nudite = $request->nudite;
        $candidat->figurant = $request->figurant;
        $candidat->baiser = $request->baiser;
        $candidat->pourquoi_cinema = $request->pourquoi_cinema;
        $candidat->couleur_cheveux = $request->couleur_cheveux;
        $candidat->longueur_cheveux = $request->longueur_cheveux;
        $candidat->texture_cheveux = $request->texture_cheveux;
        $candidat->teinture_cheveux = $request->teinture_cheveux;
        $candidat->couleur_yeux = $request->couleur_yeux;
        $candidat->lentille_yeux = $request->lentille_yeux;
        $candidat->forme_visage = $request->forme_visage;
        $candidat->percing = $request->percing;
        $candidat->cicatrice = $request->cicatrice;
        $candidat->tatouage = $request->tatouage;
        $candidat->tache_naissance = $request->tache_naissance;
        //$candidat->photo1 = $request->photo1;
        $candidat->photo2 = $request->photo2;
        $candidat->photo3 = $request->photo3;
        $candidat->photo4 = $request->photo4;
        $candidat->photo5 = $request->photo5;
        $candidat->video1 = $request->video1;
        $candidat->video2 = $request->video2;

        // $imageName = time().'.'.$request->image->getClientOriginalExtension();
        // $request->image->move(public_path('images'), $imageName);
        // $candidat->photo1 = $imageName;

        // $image = $request->file('photo1');
        // $destinationPath = 'image/';
        // $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
        // $image->move($destinationPath, $profileImage);
        // $candidat->photo1 = "$profileImage";
        
        $imageName =  $request->file('photo1')->hashName();
        Storage::disk('public')->put($imageName, file_get_contents($request->file('photo1')));

        $candidat->photo1 = $imageName;

        $candidat->save();        
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function chercher(Request $request)
    {
        $q = $request->input('q');
        $experience_cinema = Candidat::where('experience_cinema', 'like', '%$q%')->orwhere('ref','like','%$q%')->paginate(5);
        return $experience_cinema;
        //return view('posts.index',compact('experience_cinema',$experience_cinema));
    }

    public function get($id, Request $request){
        $namecasting =  $request->namecasting;

        $data = Candidat::find($id);

        $casting =  Casting::where('namecasting', $namecasting)->get();
        $data->castings()->attach($casting);

        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['prenom'] = $request['prenom'];
        $data['nom'] = $request['nom'];
        $data['telephone'] = $request['telephone'];
        Candidat::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
//ajouter un candidat à un casting
   
      public function casting_candidat(Request $request, $id,  Candidat $candidat, Casting $casting,)
    {
        // $note = '';
        // if($request->note){
        //     $note = $request->note;
        // }
        // if($candidat->castings()->save($casting, array('note' => $note))){
        //     return response()->json(['message'=>'candidat casting Created','data'=>$casting],200);
        // }
        // return response()->json(['message'=>'Error','data'=>null],400);

        //$candidat->castings()->save($casting, array('note' => $note));
        $data = Candidat::find($id);
        $casting = $request->casting;
        $data->castings()->attach($casting);
        return response()->json(['message'=>'candidat ajouté au  casting ','data'=>$data],200);

    }
}
