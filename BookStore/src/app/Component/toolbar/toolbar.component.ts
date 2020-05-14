import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  bookName: string;
 length : any;
 @Input() output : any;
  constructor( private service : BookService, ) { }

  ngOnInit(): void {
    this.length  = sessionStorage.length;
    
  }
  bookSearch() {
    // console.log(this.bookName);
    this.service.setSearchBookData(this.bookName);
  }



  getUpdatedNotes(event) {
this.ngOnInit();
}

}