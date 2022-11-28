import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';


@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {

  candidats: Candidat[] = [];
  first_img?: string;
imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/uploads/';
data : any;
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
      
    })
  }

  getCandidatSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.candidatService.
     getSearchCandidat(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getCandidatSearchName(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.candidatService.
     getSearchCandidatName(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getCandidatSearchAge(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.candidatService.
     getSearchCandidatAge(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getCandidatSearchTeint(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.candidatService.
     getSearchCandidatTeint(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getCandidatSearchSexe(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.candidatService.
     getSearchCandidatSexe(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
  //ken_dia 
  firstImage(candidat: any) {
    //console.log('first image', candidat);
    return this.imageDirectoryPath+''+candidat.images[0].filename;
  }
}
