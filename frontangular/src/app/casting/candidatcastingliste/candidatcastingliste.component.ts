import { Component, OnInit } from '@angular/core';
import { CastingService } from '../casting.service';
import { ActivatedRoute } from '@angular/router';
import { Casting } from '../casting';

@Component({
  selector: 'app-candidatcastingliste',
  templateUrl: './candidatcastingliste.component.html',
  styleUrls: ['./candidatcastingliste.component.css']
})
export class CandidatcastinglisteComponent implements OnInit {

  id!: number;
  casting!: Casting;
  user = undefined;
namecasting =undefined;


  
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
  data : any;
  constructor(private castingService: CastingService,
    private route: ActivatedRoute,
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCasting'];
        
    this.castingService.candidat(this.id).subscribe((data: Casting)=>{
      this.casting = data;
      console.log(this.casting);

    });

  }
  

}
