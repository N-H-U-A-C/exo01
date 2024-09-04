import {Component} from '@angular/core';
import {Book} from "../../domain/book";
import {ThumbsPipe} from "../../utils/pipes/thumbs.pipe";
import {FormsModule} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    ThumbsPipe,
    FormsModule
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
  book: Book = {
    title: "",
    author: "",
    isRead: false,
  };
  isSubmitted = false;

  toggleIsRead(book: Book): void {
    book.isRead = !book.isRead;
  }

  get titleHasError(): boolean {
    return this.isSubmitted && this.book.title.length === 0;
  }

  get authorHasError(): boolean {
    return this.isSubmitted && this.book.author.length === 0;
  }

  submitBook() {
    this.isSubmitted = true;
    if (!this.titleHasError && !this.authorHasError) {
      this.library.push({...this.book});
      this.resetForm();
    }
  }

  private resetForm() {
    this.isSubmitted = false;
    this.book = {
      title: "",
      author: "",
      isRead: false,
    };
  }
}
