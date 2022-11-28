import { Component, OnInit } from '@angular/core';
import { Personel } from '../personel';
import { PersonelService } from '../personel.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.css']
})
export class PersonelComponent implements OnInit {

  personels: Personel[] = [];
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
data: any;
 
  constructor(private personelService: PersonelService) { }

  ngOnInit(): void {
    this.retrievePersonels();
  }

  retrievePersonels(): void {
    this.personelService.getAll()
      .subscribe({
        next: (data) => {
          this.personels = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  getPersonelSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.personelService.
     getSearchPersonel(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
 getMetierSearch(name: any)
  {
    const keyword = name.target.value;
    //console.log(keyword);
     const search = this.personelService.
     getSearchMetier(keyword).
      then(response => {
        this.data = response;   
        console.log(this.data) 
});
 ;}
}
