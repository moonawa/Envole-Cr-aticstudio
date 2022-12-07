import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { Casting } from '../casting.model';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-listecasting',
  templateUrl: './listecasting.component.html',
  styleUrls: ['./listecasting.component.css']
})
export class ListecastingComponent implements OnInit {
  castings: Casting[] = [];
  p: number = 1;
  total: number = 0;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
  data : any;

  constructor(private castingService: CastingService) { }

  ngOnInit(): void {
    // this.castingService.getAll().subscribe((data: Casting[])=>{
    //   this.castings = data;
    //   console.log(this.castings);
    // })
    this.getCastingss();

  }
  getCastingss(){
    this.castingService.getCastings(this.p)
      .subscribe((response: any) => {
        this.castings = response.data;
        this.total = response.total;
      });
} 
pageChangeEvent(event: number){
  this.p = event;
  this.getCastingss();
}
  get countAllCasting(): number {
    return this.castings['length'];
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.castingService.delete(id).subscribe(res => {
         this.castings = this.castings?.filter(item => item.id !== id);
         console.log('casting deleted successfully!');
    })
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
