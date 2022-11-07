import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { Casting } from '../casting';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-listecasting',
  templateUrl: './listecasting.component.html',
  styleUrls: ['./listecasting.component.css']
})
export class ListecastingComponent implements OnInit {
  castings: Casting[] = [];
  
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

  constructor(private castingService: CastingService) { }

  ngOnInit(): void {
    this.castingService.getAll().subscribe((data: Casting[])=>{
      this.castings = data;
      console.log(this.castings);
    })
  }
 
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.castingService.delete(id).subscribe(res => {
         this.castings = this.castings.filter(item => item.id !== id);
         console.log('casting deleted successfully!');
    })
  }
}
