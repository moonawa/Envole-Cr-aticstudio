import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Selection } from '../selection';
import { HttpHeaders } from '@angular/common/http';
import { CastingService } from 'src/app/casting/casting.service';
import { Casting } from 'src/app/casting/casting';
import { Candidat } from 'src/app/candidat/candidat';
import { CandidatService } from 'src/app/candidat/candidat.service';

@Component({
  selector: 'app-listeselection',
  templateUrl: './listeselection.component.html',
  styleUrls: ['./listeselection.component.css']
})
export class ListeselectionComponent implements OnInit {

 selections: Selection[] = [];

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';
  data : any;

  constructor(private selectionService:SelectionService,) { }


  ngOnInit(): void {
  
    this.selectionService.getAll().subscribe((data: Selection[])=>{
      this.selections = data;
      console.log(this.selections);
    });

    
  }

}
