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
     getSearchCandidatName(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}

}
