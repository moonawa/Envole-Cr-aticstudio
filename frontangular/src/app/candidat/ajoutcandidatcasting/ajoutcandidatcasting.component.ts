import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Casting } from 'src/app/casting/casting';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-ajoutcandidatcasting',
  templateUrl: './ajoutcandidatcasting.component.html',
  styleUrls: ['./ajoutcandidatcasting.component.css']
})
export class AjoutcandidatcastingComponent implements OnInit {
  candidats: Candidat[] = [];
  castings: Casting[] = [];

  candidat: Candidat = {
    prenom: '',
   nom: '',
    telephone_candidat: '',
    email_candidat: '',
    taille: '',
    poids: 0,
    campagne_publicitaire: '',
    nom_campagne_publicitaire: '',
    teint: '',
    sexe: '',
    age: 0,
    adresse_candidat: '',
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
  casting: Casting = {
    id:1,
    statuscasting: '',
    datecasting: new Date(),
    namecasting: '',
    descriptioncasting: '',
    //colaborateur_id: 1,
    colaborateur: {
      id: 1,
    adresse_colaborateur: '',
    description_colaborateur: '',
    user:{
      id: 1,
    name: '',
     email: '',
    telephone: '',
     password: '',
 status: '',
     avatar: '',
    }

   }
   
  };

  submitted = false;

  constructor(private candidatService: CandidatService, private router: Router) { }

  ngOnInit(): void {
  }
  saveCandidatCasting(): void {
    const data = {
    
        id: this.candidat.id,
        idnom: this.candidat.nom,
    };

    this.candidatService.casting(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      //this.router.navigateByUrl('candidat/liste');

  }

}
