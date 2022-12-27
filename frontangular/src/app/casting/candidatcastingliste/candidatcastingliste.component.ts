import { Component, OnInit } from '@angular/core';
import { CastingService } from '../casting.service';
import { ActivatedRoute } from '@angular/router';
import { Casting } from '../casting';
import { Candidat } from 'src/app/candidat/candidat.model';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

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
candidatss: Candidat[] = [];

form!: FormGroup;

  
  imageDirectoryPath: any = 'https://api.senegopt.com/storage/';
  data : any;
  constructor(private castingService: CastingService,
    private route: ActivatedRoute,
    private candidatService: CandidatService,
    private http: HttpClient
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCasting'];
        
    this.castingService.candidat(this.id).subscribe((data: Casting)=>{
      this.casting = data;
      console.log(this.casting);

    });

    this.candidatService.getAll().subscribe((data: Candidat[])=>{
      this.candidatss = data;
      console.log(this.candidatss);
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
  

    this.http.post('https://api.senegopt.com/api/casting/test', formData)
      .subscribe(res => {
        console.log(res);
      });
      alert('Le candidat est ajouté au casting avec succès!');

      //this.router.navigateByUrl('candidat/liste');
  }

  detachAlloues(): void {
    const formData = new FormData();
    formData.append("id", this.form.controls['id'].value);
    formData.append("telephone_candidat", this.form.controls['telephone_candidat'].value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    this.http.post('https://api.senegopt.com/api/casting/detach', formData)
      .subscribe(res => {
        console.log(res);
      });
      alert('Le candidat est enlevé du casting avec succès!');

      //this.router.navigateByUrl('candidat/liste');
  }

}
