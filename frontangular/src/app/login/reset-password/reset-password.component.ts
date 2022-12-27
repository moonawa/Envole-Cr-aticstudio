import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token:any;
  form!: FormGroup;
  constructor(private route:ActivatedRoute, 
    private auth:LoginService) { }

  error={
    password:null
  };
  message:any;

  ngOnInit(): void {
    //this.token = this.route.snapshot.params['token'];

    this.route.queryParams.subscribe(param => {
      this.token = param['token'];
    });
    
  }
  onSubmit(){
    const password = this.form.value.password;
    const password_confirmation = this.form.value.password_confirmation;

    this.auth.reset(this.token, password, password_confirmation).subscribe((res:any)=>{
     this.message = res.message;
    }, (err)=>{
      console.log(err);
     this.error =err.error.errors;
    })
  }

}
