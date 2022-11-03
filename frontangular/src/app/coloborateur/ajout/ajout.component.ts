import { Component, OnInit } from '@angular/core';
import { ColaborateurService } from '../colaborateur.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Colaborateur } from '../colaborateur';
import { User } from 'src/app/user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  title = 'upload';
  myForm: FormGroup;

  // colaborateur: Colaborateur = {
  //   id:1,
  //   adresse_colaborateur: '',
  //   description_colaborateur: '',
  //   user: {
  //     id: 1,
  //     name: '',
  //     email: '',
  //     telephone: '',
  //     password: '',
  //     status: '',
  //     avatar: ''

  //  }
   
  // };
 
  submitted = false;
  constructor(public fb: FormBuilder,private http: HttpClient,
    public colaborateurService: ColaborateurService,
    private router: Router
  ) { 
    this.myForm = this.fb.group({
      avatar:null,
     name: '',
     email: null,
     telephone: '',
     password : '',
     status: '',
     adresse_colaborateur: '',
     description_colaborateur: ''
    })
  }

  ngOnInit(): void {

  }
  onFileChange(event:Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    
    this.myForm.patchValue({
      avatar: file
    });
  }

  submit(){
    const formData: any = new FormData();
    formData.append("avatar", this.myForm.controls['avatar'].value);
    formData.append("name", this.myForm.controls['name'].value);
    formData.append("email", this.myForm.controls['email'].value);
    formData.append("telephone", this.myForm.controls['telephone'].value);
    formData.append("password", this.myForm.controls['password'].value);
    formData.append("status", this.myForm.controls['status'].value);
    formData.append("adresse_colaborateur", this.myForm.controls['adresse_colaborateur'].value);
    formData.append("description_colaborateur", this.myForm.controls['description_colaborateur'].value);


    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    this.http.post('http://localhost:8000/api/colaborateur', formData, httpOptions).
    subscribe({
      next: (v) => console.log('succes: ', v),
      error: (e) => console.log('error: ', e),
      complete: ()  => console.log('complete'),
      
    });
    this.router.navigateByUrl('colaborateur/liste');
  }
  // saveColaborateur(): void {
  //   const data = {
  //     adresse: this.colaborateur.adresse_colaborateur,
  //     description: this.colaborateur.description_colaborateur,
  //     name: this.colaborateur.user.name,
  //     email: this.colaborateur.user.email,
  //     telephone: this.colaborateur.user.telephone,
  //     password: this.colaborateur.user.password,
  //     avatar: this.colaborateur.user.avatar,
  //   };
 
  // this.colaborateurService.create(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  //     this.router.navigateByUrl('colaborateur/liste');

  // }
  // newColaborateur(): void {
  //   this.submitted = false;
  //   this.colaborateur = {
  //     id:1,
  //     adresse_colaborateur: '',
  //     description_colaborateur: '',
  //     user: {
  //       id: 1,
  //       name: '',
  //       email: '',
  //       telephone: '',
  //       //role: 2,
  //       password: '',
  //       status: '',
  //       avatar: ''
  
  //    }
  // };
  // }
}
