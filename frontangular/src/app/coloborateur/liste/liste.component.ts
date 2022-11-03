import { Component, OnInit } from '@angular/core';
import { Colaborateur } from '../colaborateur';
import { ColaborateurService } from '../colaborateur.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  implements OnInit {

  colaborateurs: Colaborateur[] = [];
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

  constructor(private colaborateurService: ColaborateurService) { }

  ngOnInit(): void {
    this.colaborateurService.getAll().subscribe((data: Colaborateur[])=>{
      this.colaborateurs = data;
      console.log(this.colaborateurs);
    })
  }


}
