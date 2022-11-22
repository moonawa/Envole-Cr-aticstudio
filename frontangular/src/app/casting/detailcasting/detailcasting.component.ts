import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat.model';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { User } from 'src/app/user/user';
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
  //user!: User;
   user = undefined;
   candidats: Candidat[] = [];
 
   submitted = false;

  
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public castingService: CastingService,
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService,
    private http: HttpClient
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
      console.log(this.casting);

    });
    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
    })
    this.form = new FormGroup({
      id: new FormControl(''),
      telephone_candidat: new FormControl(''),
    });

  }
  saveAlloues(): void {
    const formData = new FormData();
    formData.append("id", this.form.controls['id'].value);
    formData.append("telephone_candidat", this.form.controls['telephone_candidat'].value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
  

    this.http.post('http://localhost:8000/api/casting/test', formData)
      .subscribe(res => {
        console.log(res);
      });
      alert('Le candidat est ajouté avec succès!');

      //this.router.navigateByUrl('candidat/liste');
  }

}