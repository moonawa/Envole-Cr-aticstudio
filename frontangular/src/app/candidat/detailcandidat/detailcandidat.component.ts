import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-detailcandidat',
  templateUrl: './detailcandidat.component.html',
  styleUrls: ['./detailcandidat.component.css']
})
export class DetailcandidatComponent implements OnInit {

  id!: number;
  candidat!: Candidat;

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/';

  
  constructor(private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.candidatService.get(this.id).subscribe((data: Candidat)=>{
      this.candidat = data;
    });
  
  }
  

}

