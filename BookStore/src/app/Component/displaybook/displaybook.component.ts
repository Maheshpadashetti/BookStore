import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {



  book: BookModule = new BookModule();
  books: BookModule = new BookModule();
  items = [];
  pageofItems : Array<BookModule> = new Array<BookModule>();
  obj : BookModule[];
  size: number;
  constructor( private service : BookService, private snakbar : MatSnackBar) { }
 
  ngOnInit() {

    this.getallBooks();
    this.items = Array(11).fill(0).map((x, i) => ( { array : this.book }));  
  }

  getallBooks() {
    this.service.getallBooks().subscribe( response => {
     this.book = response.bookList;
     this.obj = response.bookList;
     
     this.pageofItems = response.bookList;
     console.log("Books ::::"+this.obj);
     return this.book;
    });
  }

onChangePage( pageofItems : Array<any>) {
 this.pageofItems = pageofItems;
}

}
