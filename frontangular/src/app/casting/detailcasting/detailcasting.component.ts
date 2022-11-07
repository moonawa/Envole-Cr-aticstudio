import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Casting } from '../casting';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-detailcasting',
  templateUrl: './detailcasting.component.html',
  styleUrls: ['./detailcasting.component.css']
})
export class DetailcastingComponent implements OnInit {

  id!: number;
  casting!: Casting;
  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public castingService: CastingService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCasting'];
        
    this.castingService.get(this.id).subscribe((data: Casting)=>{
      this.casting = data;
    });
  }

}
