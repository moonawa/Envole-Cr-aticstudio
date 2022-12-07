import { Component, OnInit } from '@angular/core';
import { Casting } from 'src/app/casting/casting.model';
import { CastingService } from 'src/app/casting/casting.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  castings: Casting[] = [];

  constructor(
    private castingService: CastingService,

  ) { }

  ngOnInit(): void {
  

  this.castingService.castingClientconncete().
    subscribe((data: Casting[])=>{
      this.castings = data;
     // console.log(this.castings);
    });
  }
  get countCasting(): number {
    return this.castings['length'];
  }
}
