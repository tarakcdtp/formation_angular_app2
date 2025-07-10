import { Component, OnInit } from '@angular/core';
import { Query } from './classes/query';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss'],
})
export class QueriesComponent implements OnInit {
  modif : boolean=false;
  selectedQuery!: Query;
  editedQuery!: Query;

  constructor(public testService: TestService) {

  }
  ngOnInit(): void {
    //this.queries = this.testService.queries;
    this.testService.x = 4;
  }

  querySelected(query: any) {
    this.selectedQuery = query;
  }
  newQuery(query:any) {
    let idx=this.testService.queries.findIndex(q=>query.id==q.id);
    if (idx>-1) {this.testService.queries[idx]=query} 
    else {this.testService.queries.push(query);}
  }
  editQuery(query:any){
    this.modif=true;
    this.editedQuery=query;
  }
}
