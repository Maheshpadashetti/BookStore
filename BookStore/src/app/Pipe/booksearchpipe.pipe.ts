import { Pipe, PipeTransform } from '@angular/core';
import { BookModule } from '../Model/book/book.module';

@Pipe({
  name: 'booksearchpipe'
})
export class BooksearchpipePipe implements PipeTransform {

  transform(boo: BookModule[], searchTerm: string): BookModule[] {
    console.log(searchTerm);
    if (!boo || !searchTerm) {
      return boo;
    }
    return boo.filter(
      (book) =>
        book.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }

}
