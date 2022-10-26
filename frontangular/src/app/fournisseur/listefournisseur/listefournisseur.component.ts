import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-listefournisseur',
  templateUrl: './listefournisseur.component.html',
  styleUrls: ['./listefournisseur.component.css']
})
export class ListefournisseurComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fournisseurService.getAll().subscribe((data: Fournisseur[])=>{
      this.fournisseurs = data;
      console.log(this.fournisseurs);
    })
  }
}
