import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Selection } from '../selection';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-detailselection',
  templateUrl: './detailselection.component.html',
  styleUrls: ['./detailselection.component.css']
})
export class DetailselectionComponent implements OnInit {

  id!: number;
  selection!: Selection;
  constructor(
    public selectionService: SelectionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.selectionService.get(this.id).subscribe((data: Selection)=>{
      this.selection = data;
    });
  }

}
