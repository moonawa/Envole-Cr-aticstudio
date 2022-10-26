import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {

  candidats: Candidat[] = [];

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
    })
  }

}
