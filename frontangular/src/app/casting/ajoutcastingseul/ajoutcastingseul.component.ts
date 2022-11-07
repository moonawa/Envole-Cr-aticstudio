import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colaborateur } from 'src/app/coloborateur/colaborateur';
import { ColaborateurService } from 'src/app/coloborateur/colaborateur.service';
import { CastingService } from '../casting.service';

@Component({
  selector: 'app-ajoutcastingseul',
  templateUrl: './ajoutcastingseul.component.html',
  styleUrls: ['./ajoutcastingseul.component.css']
})
export class AjoutcastingseulComponent implements OnInit {

  form!: FormGroup;
  constructor(
    public castingservice: CastingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      datecasting: new FormControl('', [Validators.required]),
      descriptioncasting: new FormControl('', Validators.required),
      namecasting: new FormControl(''),
    //statuscasting: new FormControl(''),
    });
  }

  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.castingservice.createcasting(this.form.value).subscribe((res:any) => {
         console.log('Casting created successfully!');
         this.router.navigateByUrl('casting/liste');
    })
  }

  }


