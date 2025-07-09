import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Query } from '../query';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() query!: Query;
  @Output() editQueryevent=new EventEmitter();
  
  editQuery(){
    this.editQueryevent.emit({...this.query});
  }
}
