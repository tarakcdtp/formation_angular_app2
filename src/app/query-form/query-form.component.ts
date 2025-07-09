import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss'],
 
})
export class QueryFormComponent implements OnInit {

  constructor(public testService: TestService) {

  }

  ngOnInit(): void {
    if (!this.query) this.query=new Query();
  }
 
  @Input() query: Query = new Query();
 @Output() newQueryEvent=new EventEmitter();
  addQuery() {
  this.newQueryEvent.emit(this.query);
  }
  cancel() {
    this.modif=false;
    this.query=new Query();
  }

  @Input() modif : boolean=false;
}
 