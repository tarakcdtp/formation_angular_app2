import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Query } from '../query';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() queriesList: Query[] = [];
  @Output() selectedQueryEvent = new EventEmitter()
  
  querySelected(query: any) {
    this.selectedQueryEvent.emit(query);
  }
}
