import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss'],
 
})
export class QueryFormComponent implements OnInit {

  id!: string | null;
  constructor(public testService: TestService,private router : Router,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (!this.query) this.query = new Query();
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');
        this.query = this.testService.getQueryById(this.id)
        this.modif = true;
      }
  });
}
  query!: Query | undefined;
  //@Input() query: Query = new Query();
  @Output() newQueryEvent=new EventEmitter();
  
  addQuery() {
  this.testService.newQuery(this.query);
  this.router.navigate(['list']);
  }
  
  cancel() {
    this.modif=false;
    this.query=new Query();
  }

  @Input() modif : boolean=false;
}
