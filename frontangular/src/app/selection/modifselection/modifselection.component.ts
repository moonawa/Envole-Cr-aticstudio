import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat.model';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { Casting } from 'src/app/casting/casting.model';
import { CastingService } from 'src/app/casting/casting.service';
import { Selection } from '../selection';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-modifselection',
  templateUrl: './modifselection.component.html',
  styleUrls: ['./modifselection.component.css']
})
export class ModifselectionComponent implements OnInit {

  id!: number;
  selection!: Selection;
  form!: FormGroup;

  castings: Casting[] = [];
  candidats: Candidat[] = [];
  constructor(private route: ActivatedRoute,
  private router: Router,
  private castingservice: CastingService,
  private selectionService: SelectionService,
  private candidatservice: CandidatService,) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.selectionService.get(this.id).subscribe((data: Selection)=>{
      this.selection = data;
    }); 
    this.form = new FormGroup({
      nameselection: new FormControl('', [Validators.required]),
      candidat_id: new FormControl(''),
    });

    this.candidatservice.getAll().subscribe((data: Candidat[])=>{
      this.candidats = data;
      console.log(this.candidats);
    });
   
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.selectionService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Le candidat a été ajouté avec succes!');
         alert('Le candidat a été ajouté avec succes');
         //this.router.navigateByUrl('casting/liste');
    })
  }

}
