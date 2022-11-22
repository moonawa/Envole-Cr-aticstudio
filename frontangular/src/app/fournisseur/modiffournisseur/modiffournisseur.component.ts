import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../fournisseur.model';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-modiffournisseur',
  templateUrl: './modiffournisseur.component.html',
  styleUrls: ['./modiffournisseur.component.css']
})
export class ModiffournisseurComponent implements OnInit {

  id!: number;
  fournisseur!: Fournisseur;
  form!: FormGroup;
  constructor(private route: ActivatedRoute ,
    private router: Router,
    private fournisseurservice: FournisseurService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idFournisseur'];
    this.fournisseurservice.get(this.id).subscribe((data: Fournisseur)=>{
      this.fournisseur = data;
    }); 

   this.form = new FormGroup({
      name_fournisseur: new FormControl('', [Validators.required]),
      email_fournisseur: new FormControl('', Validators.required),
      telephone_fournisseur: new FormControl(''),
      pays: new FormControl(''),
      region: new FormControl('', [Validators.required]),
      ville: new FormControl('', Validators.required),
      prestation: new FormControl(''),
      autre: new FormControl(''),
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.fournisseurservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Fournisseur updated successfully!');
         alert('Le Fournisseur a été modifié avec succès');
         this.router.navigateByUrl('fournisseur/liste');
    })
  }

}
