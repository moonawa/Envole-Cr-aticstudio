import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-majeur',
  templateUrl: './majeur.component.html',
  styleUrls: ['./majeur.component.css']
})
export class MajeurComponent implements OnInit {

  majeurs: Candidat[] = [];
  imageDirectoryPath: any = 'https://api.senegopt.com/storage/uploads/';
  data : any;
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.majeur().subscribe((data: Candidat[])=>{
      this.majeurs = data;
      //console.log(this.candidats);
    })
  }

}
