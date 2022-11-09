import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ajoutcandidat',
  templateUrl: './ajoutcandidat.component.html',
  styleUrls: ['./ajoutcandidat.component.css']
})
export class AjoutcandidatComponent implements OnInit {
  
title = 'upload';
submitted = false;

form!: FormGroup;



myForm: FormGroup;
  constructor(public fb: FormBuilder,private http: HttpClient,
    private router: Router) {
    this.myForm = this.fb.group({
    photo1:null,
    nom: [
    '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]],
    prenom: null,
    telephone_candidat: '',
    email_candidat : '',
    taille: '',
    poids: 0,
    teint: '',
    sexe: '',

   birthday: new Date(),
   age: '',

   adresse_candidat: '',
   profession: '',
   campagne_publicitaire: '',
   nom_campagne_publicitaire: '',
   langues_parlees: '',
   signe_particulier: '',
   barbu: '',
   couleur_cheveux: '',
   longueur_cheveux: '',
   texture_cheveux: '',
   teinture_cheveux: '',
   couleur_yeux: '',
   lentille_yeux: '',
   forme_visage: '',
   percing: '',
    cicatrice: '',
    tatouage: '',
   tache_naissance: '',

   //photo1: '',
   photo2: '',
   //photo1: '',
   photo3: '',
   photo4: '',
   photo5: '',
    video1: '',
   video2: '',
        
   situation_matrimoniale: '',
   enfant: 0,

   selection_envole: '',
   quel_cinema: '',
   experience_cinema: '',
   combien_de_film: 0,
   experience_theatre: '',
   combien_annee_theatre: 0,
    
   role_interdit: '',
   role_souhaite: '',
   nudite: '',
   figurant: '',
   baiser: '',
   pourquoi_cinema: '',
    
   appreciation: '',

    })
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', Validators.required),
      telephone: new FormControl(''),
      teint: new FormControl(''),
    });
  }
   get f(){
    return this.form.controls;
  }
  onFileChange(event:Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    
    this.myForm.patchValue({
      photo1: file
    });
    
  }

  submit(){
     this.submitted = true;

    //  if (this.myForm.invalid) {
    //    return;
    //  }
    console.log(JSON.stringify(this.myForm.value, null, 2));


    const formData: any = new FormData();
    formData.append("photo1", this.myForm.controls['photo1'].value);
    formData.append("nudite", this.myForm.controls['nudite'].value);
    formData.append("situation_matrimoniale", this.myForm.controls['situation_matrimoniale'].value);
    formData.append("sexe", this.myForm.controls['sexe'].value);
    formData.append("experience_theatre", this.myForm.controls['experience_theatre'].value);
    formData.append("selection_envole", this.myForm.controls['selection_envole'].value);
    formData.append("telephone_candidat", this.myForm.controls['telephone_candidat'].value);
    formData.append("experience_cinema", this.myForm.controls['experience_cinema'].value);
    formData.append("figurant", this.myForm.controls['figurant'].value);
    formData.append("baiser", this.myForm.controls['baiser'].value);
    formData.append("nom", this.myForm.controls['nom'].value);
    formData.append("prenom", this.myForm.controls['prenom'].value);
    formData.append("email_candidat", this.myForm.controls['email_candidat'].value);
    formData.append("taille", this.myForm.controls['taille'].value);
    formData.append("poids", this.myForm.controls['poids'].value);
    formData.append("teint", this.myForm.controls['teint'].value);
    formData.append("sexe", this.myForm.controls['sexe'].value);
    //formData.append("age", this.myForm.controls['age'].value);
    formData.append("adresse_candidat", this.myForm.controls['adresse_candidat'].value);
    formData.append("profession", this.myForm.controls['profession'].value);

    formData.append("campagne_publicitaire", this.myForm.controls['campagne_publicitaire'].value);
    formData.append("nom_campagne_publicitaire", this.myForm.controls['nom_campagne_publicitaire'].value);
    formData.append("langues_parlees", this.myForm.controls['langues_parlees'].value);
    formData.append("signe_particulier", this.myForm.controls['signe_particulier'].value);
    formData.append("barbu", this.myForm.controls['barbu'].value);
    formData.append("birthday", this.myForm.controls['birthday'].value);
    formData.append("couleur_cheveux", this.myForm.controls['couleur_cheveux'].value);
    formData.append("longueur_cheveux", this.myForm.controls['longueur_cheveux'].value);
    formData.append("texture_cheveux", this.myForm.controls['texture_cheveux'].value);
    formData.append("teinture_cheveux", this.myForm.controls['teinture_cheveux'].value);
    formData.append("couleur_yeux", this.myForm.controls['couleur_yeux'].value);
    formData.append("lentille_yeux", this.myForm.controls['lentille_yeux'].value);
    formData.append("forme_visage", this.myForm.controls['forme_visage'].value);
    formData.append("percing", this.myForm.controls['percing'].value);
    formData.append("cicatrice", this.myForm.controls['cicatrice'].value);
    formData.append("tatouage", this.myForm.controls['tatouage'].value);
    formData.append("tache_naissance", this.myForm.controls['tache_naissance'].value);
    formData.append("photo2", this.myForm.controls['photo2'].value);
    formData.append("photo3", this.myForm.controls['photo3'].value);
    formData.append("photo4", this.myForm.controls['photo4'].value);

    formData.append("photo5", this.myForm.controls['photo5'].value);
    formData.append("video1", this.myForm.controls['video1'].value);
    formData.append("video2", this.myForm.controls['video2'].value);
    formData.append("situation_matrimoniale", this.myForm.controls['situation_matrimoniale'].value);
    formData.append("enfant", this.myForm.controls['enfant'].value);
    formData.append("selection_envole", this.myForm.controls['selection_envole'].value);
    formData.append("quel_cinema", this.myForm.controls['quel_cinema'].value);
    formData.append("experience_cinema", this.myForm.controls['experience_cinema'].value);
    formData.append("combien_de_film", this.myForm.controls['combien_de_film'].value);
    formData.append("experience_theatre", this.myForm.controls['experience_theatre'].value);
    formData.append("combien_annee_theatre", this.myForm.controls['combien_annee_theatre'].value);
    formData.append("role_interdit", this.myForm.controls['role_interdit'].value);
    formData.append("role_souhaite", this.myForm.controls['role_souhaite'].value);
    formData.append("nudite", this.myForm.controls['nudite'].value);
    formData.append("figurant", this.myForm.controls['figurant'].value);
    formData.append("baiser", this.myForm.controls['baiser'].value);
    formData.append("pourquoi_cinema", this.myForm.controls['pourquoi_cinema'].value);
    formData.append("appreciation", this.myForm.controls['appreciation'].value);
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    this.http.post('http://localhost:8000/api/candidats', formData, httpOptions).
    subscribe({
      next: (v) => console.log('succes: ', v),
      error: (e) => console.log('error: ', e),
      complete: ()  => console.log('complete'),
      
    });
    //this.router.navigateByUrl('candidat/liste');

  }
}
