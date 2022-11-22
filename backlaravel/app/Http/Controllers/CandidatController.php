<?php

namespace App\Http\Controllers;

use App\Models\Candidat;
use App\Models\Casting;
use App\Models\File;
use App\Models\Image;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CandidatController extends Controller
{
    public function index(){
        $candidat =  Candidat::with('images')->get();
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
        $request->validate([
            'filename' => 'required',
            'filename.*' => 'required|mimes:doc,docx,xlsx,xls,pdf,zip,png,bmp,jpg|max:2048',
        ]);
        $candidat = new Candidat();
        $candidat->prenom = $request->prenom;
        $candidat->nom = $request->nom;
        $candidat->email_candidat = $request->email_candidat;
        $candidat->telephone_candidat = $request->telephone_candidat;
        $candidat->adresse_candidat = $request->adresse_candidat;
        $candidat->sexe = $request->sexe;
        $candidat->birthday = $request->birthday;
        $candidat->age = Carbon::parse($request->birthday)->diff(Carbon::now())->y;
        $candidat->situation_matrimoniale = $request->situation_matrimoniale;
        $candidat->enfant = $request->enfant;

        $candidat->taille = $request->taille;
        $candidat->poids = $request->poids;
        $candidat->teint = $request->teint;
        $candidat->barbu = $request->barbu;
        $candidat->profession = $request->profession;
        $candidat->langues_parlees = $request->langues_parlees;
        $candidat->signe_particulier = $request->signe_particulier;
        $candidat->longueur_cheveux = $request->longueur_cheveux;
        $candidat->texture_cheveux = $request->texture_cheveux;
        $candidat->couleur_cheveux = $request->couleur_cheveux;
        $candidat->teinture_cheveux = $request->teinture_cheveux;
        $candidat->couleur_yeux = $request->couleur_yeux;
        $candidat->lentille_yeux = $request->lentille_yeux;
        $candidat->forme_visage = $request->forme_visage;
        $candidat->percing = $request->percing;
        $candidat->cicatrice = $request->cicatrice;
        $candidat->tatouage = $request->tatouage;
        $candidat->tache_naissance = $request->tache_naissance;

        $candidat->selection_envole = $request->selection_envole;
        $candidat->quel_cinema = $request->quel_cinema;

        $candidat->campagne_publicitaire = $request->campagne_publicitaire;
        $candidat->nom_campagne_publicitaire = $request->nom_campagne_publicitaire;
        
        $candidat->role_souhaite = $request->role_souhaite;
        $candidat->lequel_role_souhaite = $request->lequel_role_souhaite;

        $candidat->role_interdit = $request->role_interdit;
        $candidat->lequel_role_interdit = $request->lequel_role_interdit;

        $candidat->experience_cinema = $request->experience_cinema;
        $candidat->combien_de_film = $request->combien_de_film;
        $candidat->les_films = $request->les_films;

        $candidat->experience_theatre = $request->experience_theatre;
        $candidat->combien_annee_theatre = $request->combien_annee_theatre;
        $candidat->les_theatres = $request->les_theatres;

        $candidat->figurant = $request->figurant;
        $candidat->baiser = $request->baiser;
        $candidat->nudite = $request->nudite;

        $candidat->pourquoi_cinema = $request->pourquoi_cinema;
        $candidat->appreciation = $request->appreciation;
        $candidat->photo1 = $request->photo1;
        // $candidat->photo2 = $request->photo2;
        // $candidat->photo3 = $request->photo3;
        // $candidat->photo4 = $request->photo4;
        // $candidat->photo5 = $request->photo5;
        // $candidat->video1 = $request->video1;
        // $candidat->video2 = $request->video2;

        // $imageName = time().'.'.$request->image->getClientOriginalExtension();
        // $request->image->move(public_path('images'), $imageName);
        // $candidat->photo1 = $imageName;

        // $image = $request->file('photo1');
        // $destinationPath = 'image/';
        // $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
        // $image->move($destinationPath, $profileImage);
        // $candidat->photo1 = "$profileImage";
        
        //le bon
        //  $imageName =  $request->file('photo1')->hashName();
        //  Storage::disk('public')->put($imageName, file_get_contents($request->file('photo1')));
        //  $candidat->photo1 = $imageName;
        $candidat->save();

         if ($request->filename){
            foreach($request->filename as $file) {
 
                $fileNames = $file->getClientOriginalName();
                $filePath = 'uploads/' . $fileNames;
 
                $path = Storage::disk('public')->put($filePath, file_get_contents($file));
                $path = Storage::disk('public')->url($path);
 
                // // Create files
                Image::create([
                    'filename' => $fileNames,
                    'candidat_id' => $candidat->id,
                ]);
            }
        }
 
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }
    
//création d'un  candidat
public function multipleCandidat(Request $request){
    $request->validate([
        'files' => 'required',
        'files.*' => 'required|mimes:pdf,xlx,csv|max:2048',
    ]);
    $candidat= Candidat::create($request->all());

    $files = [];
        if ($request->file('files')){
            foreach($request->file('files') as $key => $file)
            {
                $fileName = time().rand(1,99).'.'.$file->extension();  
                $file->move(public_path('uploads'), $fileName);
                $files[]['filename'] = $fileName;
            }
        }
  
        foreach ($files as $key => $file) {
            File::create
            ([$file
                ,
                'candidat_id' => $candidat->id
                ]);
        }
    $this->validate($request, [
        //'name' => 'required',
        'photos'=>'required',
        ]);
        if($request->hasFile('photos'))
        {
            $allowedfileExtension=['pdf','jpg','png','docx'];
            $files = $request->file('photos');
            foreach($files as $file){
            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $check=in_array($extension,$allowedfileExtension);
            //dd($check);
            if($check)
            {
            $candidat= Candidat::create($request->all());
            foreach ($request->photos as $photo) {
            $filename = $photo->store('photos');
            File::create([
            'candidat_id' => $candidat->id,
            'filename' => $filename
            ]);
            }
            echo "Upload Successfully";
            }
            else
            {
            echo 'Sorry Only Upload png , jpg , doc';
            }
            }
            }
            }
            
    public function chercher(Request $request)
    {
        $q = $request->input('name');
        $experience_cinema = Candidat::where('teint', 'like', '%$name%')->orwhere('ref','like','%$name%')->paginate(5);
        return $experience_cinema;
        //return view('posts.index',compact('experience_cinema',$teint));
    }

    public function searchCandidat(Request $request){
       // $query = Candidat::query();
        $data = $request->input('search_candidat');
        if($data){
          $query = Candidat::where('age', 'LIKE', '%'.$data.'%')->
                            orWhere('teint', 'LIKE', '%'.$data.'%')->
                            orWhere('appreciation', 'LIKE', '%'.$data.'%')->
                            orWhere('prenom', 'LIKE', '%'.$data.'%')-> 
                            orWhere('sexe', 'LIKE', '%'.$data.'%')->get();

          //$query->where('age', 'LIKE', '%'.$data.'%')->get();
                //dd($query);
                return $query;
        } 
        
    }

    public function ageCandidat(Request $request){
        // $query = Candidat::query();
         $data = $request->input('search_candidat');
         if($data){
           $query = Candidat::where('age', 'LIKE', '%'.$data.'%')->get();
                 return $query;
         } 
     }

    public function get($id, Request $request){
       // $namecasting =  $request->namecasting;

        $data = Candidat::with('images')->find($id);

        // $casting =  Casting::where('namecasting', $namecasting)->get();
        // $data->castings()->attach($casting);

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
