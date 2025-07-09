import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  @Input() queriesList: Query[] = [];
  @Output() selectedQueryEvent = new EventEmitter()
  constructor(private testService:TestService){
    
  }
  ngOnInit(): void {
   this.queriesList=this.testService.queries;
  }
  
  querySelected(query: any) {
    this.selectedQueryEvent.emit(query);
  }
}
