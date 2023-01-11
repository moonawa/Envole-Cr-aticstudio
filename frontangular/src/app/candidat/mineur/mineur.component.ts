import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-mineur',
  templateUrl: './mineur.component.html',
  styleUrls: ['./mineur.component.css']
})
export class MineurComponent implements OnInit {

  mineurs: Candidat[] = [];
  imageDirectoryPath: any = 'https://api.senegopt.com/storage/uploads/';
  data : any;
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.mineur().subscribe((data: Candidat[])=>{
      this.mineurs = data;
      //console.log(this.candidats);
    })
  }

  firstImage(candidat: any) {
    //console.log('first image', candidat);
    return this.imageDirectoryPath+''+candidat.images[0].filename;
  }
}
