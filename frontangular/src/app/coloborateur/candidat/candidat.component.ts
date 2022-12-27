import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Casting } from 'src/app/casting/casting.model';
import { CastingService } from 'src/app/casting/casting.service';
import { LoginService } from 'src/app/login/login.service';
import { Colaborateur } from '../colaborateur.model';
import { ColaborateurService } from '../colaborateur.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  user: any;
  isSignedIn!: boolean;

  castings: Casting[] = [];
  data: any;
    constructor(
      public router: Router,
    public auth: LoginService
      ,private castingService: CastingService) { }
  
    ngOnInit(): void {

      this.auth.status().subscribe((res)=>{
        console.log(res);
      })
      this.auth.user().subscribe((res)=>{
        this.user = res;
        this.isSignedIn = true;
      }, (err) =>{
        console.log(err);
      });

      this.castingService.castingClientconncete().subscribe((data: Casting[])=>{
        this.castings = data;
        console.log(this.castings);
      });
    }
    get countAllCasting(): number {
      return this.castings['length'];
    }
}
