import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Selection } from '../selection';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-ajoutselection',
  templateUrl: './ajoutselection.component.html',
  styleUrls: ['./ajoutselection.component.css']
})
export class AjoutselectionComponent implements OnInit {

  selection: Selection =  {
    id:1,
    note: '',
    status: '',

    casting : {
      id:1,
      statuscasting: '',
      datecasting: new Date(),
      namecasting: '',
      //colaborateur_id: 1,
      descriptioncasting: '',
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
    },
    candidat: {
      prenom: '',
     nom: '',
      telephone_candidat: '',
      email_candidat: '',
      taille: '',
      poids: 0,
      teint: '',
      sexe: '',
      age: 0,
      adresse_candidat: '',
      campagne_publicitaire: '',
      nom_campagne_publicitaire: '',
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
    
   
    }
  
     
    
  }
  submitted = false;
  constructor(public selectionservice: SelectionService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSelection(): void {
    const data = {
      //note: this.selection.datecasting,
      status: this.selection.status,
      candidat: this.selection.candidat.id,
      casting: this.selection.casting.id,
      
    };
 
  this.selectionservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.router.navigateByUrl('selection/liste');

  }
}
