import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColaborateurService } from '../colaborateur.service';
import { Colaborateur } from '../colaborateur.model';
@Component({
  selector: 'app-detailcoloborateur',
  templateUrl: './detailcoloborateur.component.html',
  styleUrls: ['./detailcoloborateur.component.css']
})
export class DetailcoloborateurComponent implements OnInit {
  id!: number;
  colaborateur!: Colaborateur;
 //user!: User;
  user = undefined;
  constructor(
    private route: ActivatedRoute,
    private colaborateurService: ColaborateurService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idColoborateur'];
        
    this.colaborateurService.get(this.id).subscribe((data: Colaborateur)=>{
      this.colaborateur = data;
      console.log(this.colaborateur);

    });
  }

}
