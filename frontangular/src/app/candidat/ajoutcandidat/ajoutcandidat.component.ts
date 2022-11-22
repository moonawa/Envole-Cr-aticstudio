import { Component, OnInit } from '@angular/core';
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
myFiles: any = [];
form!: FormGroup;

  constructor(private http: HttpClient,
    private candidatservice: CandidatService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      telephone_candidat: new FormControl('' , ),
      email_candidat: new FormControl(''),
      adresse_candidat: new FormControl(''),
      sexe: new FormControl(''),
      birthday: new FormControl(''),
      situation_matrimoniale: new FormControl(''),
      enfant: new FormControl(''),

      teint: new FormControl(''),
      taille: new FormControl(''),
      poids: new FormControl('', ),
      barbu: new FormControl('',),
      profession: new FormControl('', ),
      langues_parlees: new FormControl(''),
      signe_particulier: new FormControl('', ),
      longueur_cheveux: new FormControl('', ),
      texture_cheveux: new FormControl('', ),
      teinture_cheveux: new FormControl(''),
      couleur_yeux: new FormControl(''),
      percing: new FormControl(''),
      cicatrice: new FormControl('',),
      tatouage: new FormControl(''),
      tache_naissance: new FormControl(''),
      lentille_yeux: new FormControl('', ),
      forme_visage: new FormControl(''),
      couleur_cheveux: new FormControl(''),

      selection_envole: new FormControl('', ),
      quel_cinema: new FormControl('', ),

      campagne_publicitaire: new FormControl('', ),
      nom_campagne_publicitaire: new FormControl(''),

      role_souhaite: new FormControl(''),
      lequel_role_souhaite: new FormControl(''),

      role_interdit: new FormControl(''),
      lequel_role_interdit: new FormControl(''),

      experience_cinema: new FormControl(''),
      combien_de_film: new FormControl(''),
      les_films: new FormControl(''),

      experience_theatre: new FormControl('',),
      combien_annee_theatre: new FormControl('',),
      les_theatres: new FormControl('',),

      nudite: new FormControl(''),
      figurant: new FormControl('', ),
      baiser: new FormControl('',),
     
      pourquoi_cinema: new FormControl(''),
      appreciation: new FormControl(''),

       photo1: new FormControl(null),
      // photo2: new FormControl('', ),
      // photo3: new FormControl('', ),
      // photo4: new FormControl(''),
      // photo5: new FormControl(''),
      // video1: new FormControl('', ),
      // video2: new FormControl('',),
      // fileSource: new FormControl(''),
      //documents: new FormControl('', [Validators.required]),

      filename: new FormControl('', [Validators.required])

      
    });
  }
   get f(){
    return this.form.controls;
  }

  onFileChange(event:any) {
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
  }
  }

  submit(){

  const formData = new FormData();
  for (var i = 0; i < this.myFiles.length; i++) { 
    formData.append("filename[]", this.myFiles[i]);
  }
  

    formData.append("nom", this.form.controls['nom'].value);
    formData.append("prenom", this.form.controls['prenom'].value);
    formData.append("email_candidat", this.form.controls['email_candidat'].value);
    formData.append("adresse_candidat", this.form.controls['adresse_candidat'].value);
    formData.append("telephone_candidat", this.form.controls['telephone_candidat'].value);
    formData.append("sexe", this.form.controls['sexe'].value);
    formData.append("enfant", this.form.controls['enfant'].value);
    formData.append("birthday", this.form.controls['birthday'].value);
    formData.append("situation_matrimoniale", this.form.controls['situation_matrimoniale'].value);

    formData.append("taille", this.form.controls['taille'].value);
    formData.append("poids", this.form.controls['poids'].value);
    formData.append("teint", this.form.controls['teint'].value);
    formData.append("barbu", this.form.controls['barbu'].value);
    formData.append("signe_particulier", this.form.controls['signe_particulier'].value);
    formData.append("longueur_cheveux", this.form.controls['longueur_cheveux'].value);
    formData.append("texture_cheveux", this.form.controls['texture_cheveux'].value);
    formData.append("teinture_cheveux", this.form.controls['teinture_cheveux'].value);
    formData.append("couleur_yeux", this.form.controls['couleur_yeux'].value);
    formData.append("lentille_yeux", this.form.controls['lentille_yeux'].value);
    formData.append("forme_visage", this.form.controls['forme_visage'].value);
    formData.append("percing", this.form.controls['percing'].value);
    formData.append("cicatrice", this.form.controls['cicatrice'].value);
    formData.append("tatouage", this.form.controls['tatouage'].value);
    formData.append("tache_naissance", this.form.controls['tache_naissance'].value);
    formData.append("couleur_cheveux", this.form.controls['couleur_cheveux'].value);
    formData.append("profession", this.form.controls['profession'].value);
    formData.append("langues_parlees", this.form.controls['langues_parlees'].value);
    
    // formData.append("photo1", this.form.controls['fileSource'].value);
    // formData.append("photo2", this.form.controls['photo2'].value);
    // formData.append("photo3", this.form.controls['photo3'].value);
    // formData.append("photo4", this.form.controls['photo4'].value);
    // formData.append("photo5", this.form.controls['photo5'].value);
    // formData.append("video1", this.form.controls['video1'].value);
    // formData.append("video2", this.form.controls['video2'].value);
    
    formData.append("selection_envole", this.form.controls['selection_envole'].value);
    formData.append("quel_cinema", this.form.controls['quel_cinema'].value);
    formData.append("experience_cinema", this.form.controls['experience_cinema'].value);
    formData.append("combien_de_film", this.form.controls['combien_de_film'].value);
    formData.append("les_films", this.form.controls['les_films'].value);
    formData.append("experience_theatre", this.form.controls['experience_theatre'].value);
    formData.append("combien_annee_theatre", this.form.controls['combien_annee_theatre'].value);
    formData.append("les_theatres", this.form.controls['les_theatres'].value);
    formData.append("role_interdit", this.form.controls['role_interdit'].value);
    formData.append("lequel_role_interdit", this.form.controls['lequel_role_interdit'].value);
    formData.append("role_souhaite", this.form.controls['role_souhaite'].value);
    formData.append("lequel_role_souhaite", this.form.controls['lequel_role_souhaite'].value);
    formData.append("figurant",this.form.controls['figurant'].value);
    formData.append("baiser", this.form.controls['baiser'].value);
    formData.append("pourquoi_cinema", this.form.controls['pourquoi_cinema'].value);
    formData.append("appreciation", this.form.controls['appreciation'].value);
    formData.append("campagne_publicitaire", this.form.controls['campagne_publicitaire'].value);
    formData.append("nom_campagne_publicitaire", this.form.controls['nom_campagne_publicitaire'].value);
    formData.append("nudite", this.form.controls['nudite'].value);


    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
  

    this.http.post('http://localhost:8000/api/candidats', formData)
      .subscribe(res => {
        console.log(res);
      });;
      alert('Le candidat est créé avec succès!');

      this.router.navigateByUrl('candidat/liste');
  }
  

  
}
