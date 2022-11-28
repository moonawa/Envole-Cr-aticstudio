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
data: any;
  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fournisseurService.getAll().subscribe((data: Fournisseur[])=>{
      this.fournisseurs = data;
      console.log(this.fournisseurs);
    })
  }

  getFournisseurSearchName(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.fournisseurService.
     getSearchFournisseurName(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getFournisseurSearchPays(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.fournisseurService.
     getSearchFournisseurPays(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getFournisseurSearchRegion(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.fournisseurService.
     getSearchFournisseurRegion(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getFournisseurSearchPrestation(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.fournisseurService.
     getSearchFournisseurPrestation(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
}
}
