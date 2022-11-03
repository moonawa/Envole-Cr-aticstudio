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

  form: FormGroup = new FormGroup({
    datecasting: new FormControl(''),
    descriptioncasting: new FormControl(''),
    namecasting: new FormControl(''),
    statuscasting: new FormControl(''),
    colaborateur: new FormControl(''),
  });

  submitted = false;
  //castingservice: any;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, private router: Router,
    private castingservice: CastingService,
     ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        descriptioncasting: [''],
        namecasting: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        //statuscasting: ['', [Validators.required]],
        colaborateur: [
          '',
        ],
        datecasting: ['', Validators.required],
      },
      
    );

    
  }
  //get f(): { [key: string]: AbstractControl } {
    get f() { 
    return this.form.controls;
  }

  onSubmit(): void {
    // this.submitted = true;

    // if (this.form.invalid) {
    //   return;
    // }

    //console.log(JSON.stringify(this.form.value, null, 2));
    console.log(this.form.value);
    this.castingservice.createcasting(this.form.value).subscribe(res => {
         console.log('cas created successfully!');
        // this.router.navigateByUrl('casting/liste');
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  }


