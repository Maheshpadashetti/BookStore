import { Pipe, PipeTransform } from '@angular/core';
import { BookModule } from '../Model/book/book.module';

@Pipe({
  name: 'booksearchpipe'
})
export class BooksearchpipePipe implements PipeTransform {

  transform(book: BookModule[], searchTerm: string): BookModule[] {
    console.log(searchTerm);
    if (!book || !searchTerm) {
      return book;
    }
    return book.filter(
      (book) =>
        book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }

}
