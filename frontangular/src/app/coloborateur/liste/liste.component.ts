import { Component, OnInit } from '@angular/core';
import { Colaborateur } from '../colaborateur.model'; 
import { ColaborateurService } from '../colaborateur.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  implements OnInit {

  colaborateurs: Colaborateur[] = [];
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
  data : any;

  constructor(private ColaborateurService: ColaborateurService) { }

  ngOnInit(): void {
    this.ColaborateurService.getAll().subscribe((data: Colaborateur[])=>{
      this.colaborateurs = data;
      console.log(this.colaborateurs);
    })
  }
  get countAllColaborateur(): number {
    return this.colaborateurs['length'];
  }
  getCandidatSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.ColaborateurService.
     getSearchColaborateur(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}

}
