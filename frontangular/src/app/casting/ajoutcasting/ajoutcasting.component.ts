import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Casting } from '../casting';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-ajoutcasting',
  templateUrl: './ajoutcasting.component.html',
  styleUrls: ['./ajoutcasting.component.css']
})
export class AjoutcastingComponent implements OnInit {
  //form: FormGroup;
  title = 'upload';
  myForm: FormGroup;
  constructor(public fb: FormBuilder,private http: HttpClient,
    private router: Router) {
    this.myForm = this.fb.group({
    avatar: null,
    name: '',
    telephone: '',
    password: '',
    email: '',
    adresse_colaborateur : '',
    description_colaborateur: '',
    datecasting: new Date(),
    namecasting: '',
    descriptioncasting: '',
    //statuscasting: '',
   
    
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

 //console.log(JSON.stringify(this.myForm.value, null, 2));

 const formData: any = new FormData();
 formData.append("avatar", this.myForm.controls['avatar'].value);
 formData.append("name", this.myForm.controls['name'].value);
 formData.append("telephone", this.myForm.controls['telephone'].value);
 formData.append("password", this.myForm.controls['password'].value);
 formData.append("email", this.myForm.controls['email'].value);
 formData.append("adresse_colaborateur", this.myForm.controls['adresse_colaborateur'].value);
 formData.append("description_colaborateur", this.myForm.controls['description_colaborateur'].value);
 formData.append("datecasting", this.myForm.controls['datecasting'].value);
 formData.append("namecasting", this.myForm.controls['namecasting'].value);
 formData.append("descriptioncasting", this.myForm.controls['descriptioncasting'].value);
 
 const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
};
this.http.post('http://localhost:8000/api/casting', formData, httpOptions).
subscribe({
  next: (v) => console.log('succes: ', v),
  error: (e) => console.log('error: ', e),
  complete: ()  => console.log('complete'),
  
});
this.router.navigateByUrl('casting/liste');

}

//   casting: Casting = {
//     id:1,
//     statuscasting: '',
//     datecasting: new Date(),
//     namecasting: '',
//     descriptioncasting: '',
//     colaborateur: {
//       id: 1,
//     adresse_colaborateur: '',
//     description_colaborateur: '',
//     user:{
//       id: 1,
//     name: '',
//      email: '',
//     telephone: '',
//      password: '',
//  status: '',
//      avatar: '',
//     })

//   }

  // submitted = false;
  // constructor(
  //   public castingService: CastingService,
  //   private router: Router
  // ) { }

 

  // saveCasting(): void {
  //   const data = {
  //     datecasting: this.casting.datecasting,
  //     namecasting: this.casting.namecasting,
  //     descriptioncasting: this.casting.descriptioncasting,
  //     adresse_colaborateur: this.casting.colaborateur.adresse_colaborateur,
  //     description_colaborateur: this.casting.colaborateur.description_colaborateur,
  //     name: this.casting.colaborateur.user.name,
  //     email: this.casting.colaborateur.user.email,
  //     telephone: this.casting.colaborateur.user.telephone,
  //     password: this.casting.colaborateur.user.password,
  //     avatar: this.casting.colaborateur.user.avatar,
  //   };
 
  // this.castingService.create(data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  //     this.router.navigateByUrl('casting/liste');

  // }
  // newCasting(): void {
  //   this.submitted = false;
  //   this.casting = {
  //     id:1,
  //     datecasting: new Date(),
  //     statuscasting: '',
  //     namecasting: '',
  //     descriptioncasting: '',
  //     colaborateur: {
  //     id: 1,
  //     adresse_colaborateur: '',
  //     description_colaborateur: '',
  //     user:{
  //       id: 1,
  //     name: '',
  //      email: '',
  //     telephone: '',
  //      password: '',
  //      status: '',
  //      avatar: '',
  //     }
  //    }
  //    }
  // };
  }

