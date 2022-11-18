import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Personel } from '../personel';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-ajoutpersonel',
  templateUrl: './ajoutpersonel.component.html',
  styleUrls: ['./ajoutpersonel.component.css']
})
export class AjoutpersonelComponent implements OnInit {
  title = 'upload';
  myForm: FormGroup;
  // personel: Personel = {
  //   id:1,
  //   metier: '',
  //   user: {
  //     id: 1,
  //     name: '',
  //     email: '',
  //     telephone: '',
  //     //role: 2,
  //     password: '',
  //     status: '',
  //     avatar: ''

  //  }
   
  // };
 
  // submitted = false;
  constructor(public fb: FormBuilder,private http: HttpClient,
    public personelService: PersonelService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      avatar:null,
     name: '',
     email: null,
     telephone: '',
     password : '',
     status: '',
     metier: '',
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
    formData.append("metier", this.myForm.controls['metier'].value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };
    this.http.post('http://localhost:8000/api/personel', formData, httpOptions).
    subscribe({
      next: (v) => console.log('succes: ', v),
      error: (e) => console.log('error: ', e),
      complete: ()  => console.log('complete'),
      
    });
    alert("le personnel a été créé avec succes ");
    this.router.navigateByUrl('personel/liste');
  }

  // savepersonel(): void {
  //   const data = {
  //     metier: this.personel.metier,
  //     name: this.personel.user.name,
  //     email: this.personel.user.email,
  //     telephone: this.personel.user.telephone,
  //     password: this.personel.user.password,
  //     avatar: this.personel.user.avatar,
  //   };
 
  // this.personelService.create(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  //     this.router.navigateByUrl('personel/liste');

  // }
  // newpersonel(): void {
  //   this.submitted = false;
  //   this.personel = {
  //     id:1,
  //     metier: '',
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

