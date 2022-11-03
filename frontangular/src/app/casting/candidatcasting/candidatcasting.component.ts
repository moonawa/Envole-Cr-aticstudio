import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { Casting } from '../casting';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-candidatcasting',
  templateUrl: './candidatcasting.component.html',
  styleUrls: ['./candidatcasting.component.css']
})
export class CandidatcastingComponent implements OnInit {
  @Input() viewMode = false;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

  @Input() currentCasting: Casting = {
    id:1,
    statuscasting: '',
    datecasting: new Date(),
    namecasting: '',
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
  };
  currentCastings: Casting[] = [];

  candidats: Candidat[] = [];

   candidat: Candidat = {
    id: 1,
     prenom: '',
    nom: '',
     telephone_candidat: '',
     email_candidat: '',
     taille: '',
     poids: 0,
     nom_campagne_publicitaire: '',
     campagne_publicitaire: '',
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
  message = '';
  submitted = false;

  constructor(private castingService: CastingService,
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService) { }
  

  // ngOnInit(): void {
  //   if (!this.viewMode) {
  //     this.message = '';
  //     this.getCasting(this.route.snapshot.params["id"]);
  //   }
  
  // }
  // getCasting(id: string): void {
  //   this.castingService.get(id)
  //     .subscribe({
  //       next: (data) => {
  //         this.currentCasting = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // CastingCandidat(): void {
  //   this.message = '';

  //   this.castingService.castingcandidat(this.currentCasting.id, this.candidats)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.message = res.message ? res.message : 'casting lié au candidats';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  ngOnInit(): void {
this.castingService.getAll().subscribe((data: Casting[])=>{
      this.currentCastings = data;
      console.log(this.currentCastings);
    });

    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
    })
  }

  saveAlloue(): void {
    const data = {
      namecasting: this.currentCasting.namecasting,
      telephone_candidat: this.candidat.telephone_candidat,
      //photo1: this.candidat.photo1,
      
    };
 
  this.castingService.alloue(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      //this.router.navigateByUrl('casting/liste');

  }
}
