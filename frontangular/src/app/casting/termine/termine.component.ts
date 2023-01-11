import { Component, OnInit } from '@angular/core';

import { Casting } from '../casting.model';
import { CastingService } from '../casting.service';
@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit {

  castings: Casting[] = [];

  p: number = 1;
  id!: number;
  total: number = 0;
  imageDirectoryPath: any = 'https://api.senegopt.com/storage/';
  data : any;
  constructor(private castingService: CastingService,) { }

  ngOnInit(): void {
    this.getCastingss();


  }
  changeStatus(casting:any){
    this.castingService.status(casting.id).
    subscribe({
      next: (res) => {
        console.log(res);
      //  this.router.navigate(['/candidat/liste']);
      },
      error: (e) => console.error(e)
    });
  }
  getCastingss(){
    this.castingService.termine(this.p)
      .subscribe((response: any) => {
        this.castings = response.data;
        this.total = response.total;
      });
} 
pageChangeEvent(event: number){
  this.p = event;
  this.getCastingss();
}
getCandidatSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.castingService.
     getSearchCasting(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}


}
