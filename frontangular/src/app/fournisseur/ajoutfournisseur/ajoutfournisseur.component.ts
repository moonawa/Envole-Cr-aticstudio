import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-ajoutfournisseur',
  templateUrl: './ajoutfournisseur.component.html',
  styleUrls: ['./ajoutfournisseur.component.css']
})
export class AjoutfournisseurComponent implements OnInit {

  fournisseur: Fournisseur = {
    id: 1,
    name: '',
   email: '',
    telephone: '',
    pays: '',
    region: '',
    ville: '',
    prestation: '',
    autre: '',
  };
    submitted = false;
  constructor(private fournisseurService: FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
  }
  savefournisseur(): void {
    const data = {
      name: this.fournisseur.name,
      email: this.fournisseur.email,
      telephone: this.fournisseur.telephone,
      pays: this.fournisseur.pays,
      region: this.fournisseur.region,
      ville: this.fournisseur.ville,
      prestation: this.fournisseur.prestation,
      autre: this.fournisseur.autre,
     
    };

    this.fournisseurService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
      this.router.navigateByUrl('fournisseur/liste');

  }
  newFournisseur(): void {
    this.submitted = false;
    this.fournisseur = {
      id: 1,
      name: '',
     email: '',
      telephone: '',
      pays: '',
      region: '',
      ville: '',
      prestation: '',
      autre: '',
    };

}
}
