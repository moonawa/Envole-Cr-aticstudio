import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-modifcandidat',
  templateUrl: './modifcandidat.component.html',
  styleUrls: ['./modifcandidat.component.css']
})
export class ModifcandidatComponent implements OnInit {
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

   
   id!: number;
   form!: FormGroup;
   currentCandidat: Candidat = {
    id: 1,
    prenom: '',
    nom: '',
     telephone_candidat: '',
     email_candidat: '',
     taille: '',
     poids: '',
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
      
     appreciation: '',
  };
  message = '';
  constructor(private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // if (!this.viewMode) {
    //   this.message = '';
    //   this.getCandidat(this.route.snapshot.params["id"]);
    // }

    this.id = this.route.snapshot.params['id'];
    this.candidatService.get(this.id).subscribe((data: Candidat)=>{
      this.currentCandidat = data;
    }); 

   this.form = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', Validators.required),
      telephone_candidat: new FormControl(''),
      email_candidat: new FormControl(''),
    });
  
  }
  submit(){
    console.log(this.form.value);
    this.candidatService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('candidat updated successfully!');
         alert('Le candidat a été modifié avec succès');
         this.router.navigateByUrl('candidat/liste');
    })
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




