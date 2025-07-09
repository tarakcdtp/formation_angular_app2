import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() query!: Query | undefined;
  id!: string | null;
  @Output() editQueryevent=new EventEmitter();
  
  constructor(private testService : TestService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    //if (this.testService.query) this.query=this.testService.query;
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');
        this.query = this.testService.getQueryById(this.id)
      }
      
  });

    this.activatedRoute.queryParams.subscribe(queryParms => {
        console.log(queryParms)
        
    });

  }
  
  editQuery(){
    this.router.navigate(['edit', this.query?.id])
    //this.editQueryevent.emit({...this.query});
  }
}
