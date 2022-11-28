import { Component, OnInit } from '@angular/core';
import { Coloborateur } from '../coloborateur.model'; 
import { ColoborateurService } from '../colaborateur.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  implements OnInit {

  colaborateurs: Coloborateur[] = [];
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
  data : any;

  constructor(private ColoborateurService: ColoborateurService) { }

  ngOnInit(): void {
    this.ColoborateurService.getAll().subscribe((data: Coloborateur[])=>{
      this.colaborateurs = data;
      console.log(this.colaborateurs);
    })
  }
  getCandidatSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.ColoborateurService.
     getSearchColaborateur(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}

}
