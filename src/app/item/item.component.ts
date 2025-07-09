import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor(private testService : TestService,private router:Router) {

  }
 @Input() queryItem!: Query;
 @Output() selectEvent = new EventEmitter()
 @Input() isOdd!:boolean;
 @Input() isEven!:boolean;
 selectQuery() {
  //this.testService.query=this.queryItem;
  this.router.navigate(['show', this.queryItem.id]);
 }
   
}
