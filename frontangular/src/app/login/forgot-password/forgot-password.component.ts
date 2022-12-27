import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user/user.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  error={
    email:null
  };
  user!: User;
  personalDetails!: FormGroup;

  message:any;
  wait:boolean = false;
  constructor(private auth:LoginService,
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
  onSubmitt(){
    this.wait = true;
   // const email = personalDetails.value.email;
    this.auth.forget(this.personalDetails.value).subscribe((res:any)=>{
      this.message = res.message;
      this.wait = false;
    }, (err)=>{
     this.error = err.error.errors;
     this.wait = false;
    })
    
    
   }
  // onSubmit(form:NgForm){
  //   this.wait = true;
  //   const email = form.value.email;
  //   this.auth.forgot(email).subscribe((res:any)=>{
  //     this.message = res.message;
  //     this.wait = false;
  //   }, (err)=>{
  //    this.error = err.error.errors;
  //    this.wait = false;
  //   })
  // }

}
