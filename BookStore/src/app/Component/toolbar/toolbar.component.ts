import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  bookName: string;
  constructor( private service : BookService, ) { }

  ngOnInit(): void {
  }
  bookSearch() {
    // console.log(this.bookName);
    this.service.setSearchBookData(this.bookName);
  }
}
