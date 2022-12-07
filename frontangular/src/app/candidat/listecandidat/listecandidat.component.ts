import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { User } from 'src/app/user/user.model';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';


@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {
  //users:any;
  p: number = 1;
  total: number = 0;

  candidats: Candidat[] = [];
  first_img?: string;
imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/uploads/';
data : any;
user!: User;

  constructor(public authsercice: LoginService,
    public candidatService: CandidatService,
    ) { }

  ngOnInit(): void {
    // this.candidatService.getAll().subscribe((data: Candidat[])=>{
    //   this.candidats = data;
    //   console.log(this.candidats);
      
    // })
    
    this.authsercice.status().subscribe((res)=>{
      console.log(res);
    })
    this.authsercice.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    });

  this.getCandidats();

   this.candidatService.getCandidatss(this.p)
   .subscribe((response: any) => {
     console.log(response);
     this.candidats = response.data;
     this.total = response.total;
   });
  }
  getCandidats(){
    this.candidatService.getCandidatss(this.p)
      .subscribe((response: any) => {
        console.log(response);
        this.candidats = response.data;
        this.total = response.total;
      });
} 
pageChangeEvent(event: number){
  this.p = event;
  this.getCandidats();
}
  get countAllCandiddat(): number {
    return this.candidats['length'];
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
