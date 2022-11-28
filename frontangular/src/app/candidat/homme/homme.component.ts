import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {

  hommes: Candidat[] = [];
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/uploads/';
  data : any;
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.candidatHomme().subscribe((data: Candidat[])=>{
      this.hommes = data;
      //console.log(this.candidats);
    })
  }

}
