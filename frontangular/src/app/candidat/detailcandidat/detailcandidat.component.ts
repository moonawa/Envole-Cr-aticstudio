import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Casting } from 'src/app/casting/casting.model';
import { CastingService } from 'src/app/casting/casting.service';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detailcandidat',
  templateUrl: './detailcandidat.component.html',
  styleUrls: ['./detailcandidat.component.css']
})
export class DetailcandidatComponent implements OnInit {

  id!: number;
  candidat!: Candidat;

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/uploads/';
  castings: Casting[] = [];

  form!: FormGroup;
//pour le steper

  constructor(private candidatService: CandidatService,
    private castingService: CastingService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.candidatService.get(this.id).subscribe((data: Candidat)=>{
      this.candidat = data;
    });
    this.castingService.getAll().subscribe((data: Casting[])=>{
      this.castings = data;
      console.log(this.castings);
    })
    this.form = new FormGroup({
      id: new FormControl(''),
      namecasting: new FormControl(''),
    });
  
  }
  saveAlloues(): void {
    const formData = new FormData();
    formData.append("id", this.form.controls['id'].value);
    formData.append("namecasting", this.form.controls['namecasting'].value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    this.http.post('http://localhost:8000/api/candidats/ajoutcancas', formData)
      .subscribe(res => {
        console.log(res);
      });
      alert('Le candidat est ajouté au casting avec succès!');
      //this.router.navigateByUrl('candidat/liste');
  }
 //ken_dia 
 firstImage(candidat: any) {
  //console.log('first image', candidat);
  return this.imageDirectoryPath+''+candidat.images[0].filename;
}

}

