import { Component } from '@angular/core';
import {Book} from "../../domain/book";
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    ThumbsPipe
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

  library: Book[] = [
    {title: "title1", author: "author1", isRead: false},
    {title: "title2", author: "author2", isRead: false},
    {title: "title3", author: "author3", isRead: false},
  ];

  toggleIsRead(book: Book): void {
    book.isRead = !book.isRead;
  }
}
