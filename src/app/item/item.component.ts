import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Query } from '../query';
import { TestService } from '../test.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor() {

  }
 @Input() queryItem!: Query;
 @Output() selectEvent = new EventEmitter()
 @Input() isOdd!:boolean;
 @Input() isEven!:boolean;
 selectQuery() {
   this.selectEvent.emit(this.queryItem);
 }
}
