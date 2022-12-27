import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.css']
})
export class FemmeComponent implements OnInit {

  femmes: Candidat[] = [];
  imageDirectoryPath: any = 'https://api.senegopt.com/storage/uploads/';
  data : any;
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.candidatFemme().subscribe((data: Candidat[])=>{
      this.femmes = data;
      //console.log(this.candidats);
    })
  }

}
