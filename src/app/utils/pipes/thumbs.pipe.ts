import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../../domain/book";

@Pipe({
  name: 'thumbs',
  standalone: true
})
export class ThumbsPipe implements PipeTransform {

  transform(value: string, thumbsUp: boolean): string {
    return thumbsUp ? `${value} 👍` : `${value} 👎`;
  }
}
