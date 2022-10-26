import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { Router } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-ajoutcandidat',
  templateUrl: './ajoutcandidat.component.html',
  styleUrls: ['./ajoutcandidat.component.css']
})
export class AjoutcandidatComponent implements OnInit {
  //allCandidats: Candidat[] = [];

   candidat: Candidat = {
   prenom: '',
  nom: '',
   telephone: '',
   email: '',
   taille: '',
   poids: 0,
   teint: '',
   sexe: '',
   age: 0,
   adresse: '',
   profession: '',
   langues_parlees: '',
   signe_particulier: '',
   barbu: '',
   birthday: new Date(),

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

   photo1: '',
   photo2: '',
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
    
   appreciation: '', ///à modifier   
 

 };
  submitted = false;
  constructor(private candidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
  }
  saveCandidat(): void {
    const data = {
      prenom: this.candidat.prenom,
      nom: this.candidat.nom,
      telephone: this.candidat.telephone,
      email: this.candidat.email,
      taille: this.candidat.taille,
      poids: this.candidat.poids,
      teint: this.candidat.teint,
      sexe: this.candidat.sexe,
      age: this.candidat.age,
      adresse: this.candidat.adresse,
      profession: this.candidat.profession,
      langues_parlees: this.candidat.langues_parlees,
      signe_particulier: this.candidat.signe_particulier,
      barbu: this.candidat.barbu,
      birthday: this.candidat.birthday,
      couleur_cheveux: this.candidat.couleur_cheveux,
      longueur_cheveux: this.candidat.longueur_cheveux,
      texture_cheveux: this.candidat.texture_cheveux,
      teinture_cheveux: this.candidat.teinture_cheveux,
      couleur_yeux: this.candidat.couleur_yeux,
      lentille_yeux: this.candidat.lentille_yeux,
      forme_visage: this.candidat.forme_visage,
      percing: this.candidat.percing,
      cicatrice: this.candidat.cicatrice,
      tatouage: this.candidat.tatouage,
      tache_naissance: this.candidat.tache_naissance,
      photo1: this.candidat.photo1,
      photo2: this.candidat.photo2   ,  
      photo3: this.candidat.photo3,
      photo4: this.candidat.photo4,
      photo5: this.candidat.photo5,
      video1: this.candidat.video1,
      video2: this.candidat.video2,
      situation_matrimoniale: this.candidat.situation_matrimoniale,
      enfant: this.candidat.enfant,
      selection_envole: this.candidat.selection_envole,
      quel_cinema: this.candidat.quel_cinema,
      experience_cinema: this.candidat.experience_cinema,
      combien_de_film: this.candidat.combien_de_film,
      experience_theatre: this.candidat.experience_theatre,
      combien_annee_theatre: this.candidat.combien_annee_theatre,
      role_interdit: this.candidat.role_interdit,
      role_souhaite: this.candidat.role_souhaite,
      nudite: this.candidat.nudite,
      figurant: this.candidat.figurant,
      baiser: this.candidat.baiser,
      pourquoi_cinema: this.candidat.pourquoi_cinema,
        
      appreciation: this.candidat.appreciation, ///à modifier   
    };

    this.candidatService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.router.navigateByUrl('candidat/liste');

  }

  newCandidat(): void {
    this.submitted = false;
    this.candidat = {
      prenom: '',
      nom: '',
      telephone: '',
      email: '',
   taille: '',
   poids: 0,
   teint: '',
   sexe: '',
   age: 0,
   adresse: '',
   profession: '',
   langues_parlees: '',
   signe_particulier: '',
   barbu: '',
   birthday: new Date(),

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

   photo1: '',
   photo2: '',
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
    
   appreciation: '', ///à modifier   
    };
  }

}
