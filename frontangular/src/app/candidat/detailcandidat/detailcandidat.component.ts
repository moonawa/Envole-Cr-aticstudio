import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detailcandidat',
  templateUrl: './detailcandidat.component.html',
  styleUrls: ['./detailcandidat.component.css']
})
export class DetailcandidatComponent implements OnInit {
  @Input() viewMode = false;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

  @Input() currentCandidat: Candidat = {
    prenom: '',
    nom: '',
     telephone_candidat: '',
     email_candidat: '',
     taille: '',
     poids: 0,
     teint: '',
     sexe: '',
     nom_campagne_publicitaire: '',
     campagne_publicitaire: '',
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
      
     appreciation: '',
  };
  message = '';
  constructor(private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCandidat(this.route.snapshot.params["id"]);
    }
  
  }
  getCandidat(id: string): void {
    this.candidatService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCandidat = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      prenom: this.currentCandidat.prenom,
      nom: this.currentCandidat.nom,
      published: status
    };

    this.message = '';

    this.candidatService.update(this.currentCandidat.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Les données du candidat ont été modifié!';
        },
        error: (e) => console.error(e)
      });
  }

  updateCandidat(): void {
    this.message = '';

    this.candidatService.update(this.currentCandidat.id, this.currentCandidat)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Les données du candidat ont été modifié!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteCandidat(): void {
    this.candidatService.delete(this.currentCandidat.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/candidat/liste']);
        },
        error: (e) => console.error(e)
      });
  }

}

