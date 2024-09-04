import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(array: string[], sort: string): string[] {
    if (sort === "asc") {
      return array.sort();
    } else {
      return array.sort().reverse();
    }
  }
}
