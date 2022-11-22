import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-ajoutfournisseur',
  templateUrl: './ajoutfournisseur.component.html',
  styleUrls: ['./ajoutfournisseur.component.css']
})
export class AjoutfournisseurComponent implements OnInit {
  form!: FormGroup;

  // fournisseur: Fournisseur = {
  //   id: 1,
  //   name_fournisseur: '',
  //  email_fournisseur: '',
  //   telephone_fournisseur: '',
  //   pays: '',
  //   region: '',
  //   ville: '',
  //   prestation: '',
  //   autre: '',
  // };
  //   submitted = false;
  constructor(private fournisseurService: FournisseurService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name_fournisseur: new FormControl('', [Validators.required]),
      email_fournisseur: new FormControl('', Validators.required),
      telephone_fournisseur: new FormControl(''),
      pays: new FormControl('', [Validators.required]),
      region: new FormControl('', Validators.required),
      ville: new FormControl(''),
      prestation: new FormControl('', [Validators.required]),
      autre: new FormControl('', Validators.required),
    //statuscasting: new FormControl(''),
    });
  }
  get f(){
    return this.form.controls;
  }
  savefournisseur(){
    console.log(this.form.value);
    this.fournisseurService.create(this.form.value).subscribe((res:any) => {
         console.log('Casting created successfully!');
         alert('Le Fournisseur est ajouté avec succès!');
         this.router.navigateByUrl('fournisseur/liste');
    })
  }

  // savefournisseur(): void {
  //   const data = {
  //     name_fournisseur: this.fournisseur.name_fournisseur,
  //     email_fournisseur: this.fournisseur.email_fournisseur,
  //     telephone_fournisseur: this.fournisseur.telephone_fournisseur,
  //     pays: this.fournisseur.pays,
  //     region: this.fournisseur.region,
  //     ville: this.fournisseur.ville,
  //     prestation: this.fournisseur.prestation,
  //     autre: this.fournisseur.autre,
     
  //   };

  //   this.fournisseurService.create(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  //     alert("le fournisseur a été créé avec succes");
  //     this.router.navigateByUrl('fournisseur/liste');

  // }
  
}
