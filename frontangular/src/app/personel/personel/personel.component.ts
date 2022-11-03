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

}
