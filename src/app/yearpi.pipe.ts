import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearpi'
})
export class YearpiPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
     case 1: return 'جانفي'; break;
     case 2: return 'فيفري'; break;
     case 3: return 'مارس'; break;
     case 4: return 'أفريل'; break;
     default: ''
    }
    return 'Invalid month'
    
  }

}
