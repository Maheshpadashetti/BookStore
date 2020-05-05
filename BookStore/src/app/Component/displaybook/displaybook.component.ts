import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {


  
  book: any;
  books: BookModule = new BookModule();
  items = [];
  pageofItems : Array<BookModule> = new Array<BookModule>();
  obj : BookModule[];
  size: number;
  book_id:number;
  bookSearch: any;
  bookName: string;
  length : any = sessionStorage.length;
  s:any;
  value:any=[];
  @Output() output : EventEmitter<any> = new EventEmitter();

  constructor( private service : BookService, private snakbar : MatSnackBar) { }
 
  ngOnInit() {
    this.getallBooks();
    this.items = Array(11).fill(0).map((x, i) => ( { array : this.book }));  
    // this.addtobag();
   
  }

  getallBooks() {
 
  
  
    this.service.getallBooks().subscribe( response => {
     this.book = response.bookList;
     this.obj = response.bookList;
     this.size = response.bookList.length;
     this.pageofItems = response.bookList;
     console.log("Books ::::"+this.obj);
     return this.book;
    });
    this.getSearchBookData();
  }

    addtobag( bookId : any)
    {
  sessionStorage.setItem('bookIds'+bookId,bookId);
  this.getOutput();
}

getOutput() {
    this.output.emit("ok");
  }

  getUpdatedNotes(event) {
    this.ngOnInit();
    }

onChangePage( pageofItems : Array<any>) {
 this.pageofItems = pageofItems;
}
getSearchBookData() {
  this.service.getSearchBookData().subscribe((message) => {
    console.log("search data", message.books);
    this.bookSearch = message.books;
  });
  
  
}
// getsession(){
//   let s=sessionStorage.getItem('key');
//   console.log(s,'asaaaaaaaaaaaaa');
// for(let i=0;i<sessionStorage.length;i++){
//   let key=sessionStorage.key(i);
//   this.value[i]=sessionStorage.getItem(key);
//   console.log("key",key);
//   this.service.getBokkByid(this.value[i]).subscribe((response:any)=>{
//     console.log(response);
//     this.book=response.getBokkByid;
    
//   });
  
// }
// }
}
