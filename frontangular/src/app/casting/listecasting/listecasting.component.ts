import { Component, OnInit } from '@angular/core';
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
}
