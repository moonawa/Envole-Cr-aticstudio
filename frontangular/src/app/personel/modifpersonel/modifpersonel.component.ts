import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personel } from '../personel';
import { PersonelService } from '../personel.service';

@Component({
  selector: 'app-modifpersonel',
  templateUrl: './modifpersonel.component.html',
  styleUrls: ['./modifpersonel.component.css']
})
export class ModifpersonelComponent implements OnInit {
  id!: number;
  personel!: Personel;
  form!: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private peronelservice: PersonelService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPersonel'];
    this.peronelservice.get(this.id).subscribe((data: Personel)=>{
      this.personel = data;
    }); 

   this.form = new FormGroup({
    avatar: new FormControl('', [Validators.required]),
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    telephone: new FormControl(''),
    metier: new FormControl(''),

    });
  }
  get f(){
    return this.form.controls;
  }
    

  submit(){
    console.log(this.form.value);
    this.peronelservice.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Casting updated successfully!');
         alert('Le casting a été modifié avec succès');
         this.router.navigateByUrl('casting/liste');
    })
  }

}
