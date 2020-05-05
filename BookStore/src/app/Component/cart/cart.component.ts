import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isLinear = false;
  customerForm: FormGroup;
  book=[];
  books: BookModule = new BookModule();
  items = [];
  pageofItems : Array<BookModule> = new Array<BookModule>();
  obj : BookModule[];
  size: number;
  book_id:number;
  bookSearch: any;
  bookName: string;
  length : any = sessionStorage.length;
  value:any=[];
  @Output() output : EventEmitter<any> = new EventEmitter();


  constructor( private matSnackBar: MatSnackBarModule,
    private formBuilder: FormBuilder,
    private route: Router,private service : BookService,) { }

  ngOnInit()  {

    this.getsession();
    //this.getallBooks();
    this.customerForm = this.formBuilder.group({
    customerName: ["", Validators.required],
    contact: [
      "",
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    ],
    pinCode: [
      "",
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
    locality: [""],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    landMark: ["", [Validators.required]],
  });
  
}

getsession():any{
for(let i=0;i<sessionStorage.length;i++){
  let key=sessionStorage.key(i);
  this.value[i]=sessionStorage.getItem(key);
  console.log("key",key);
  this.service.getBokkByid(this.value[i]).subscribe((response:any)=>{
   console.log(response);
   this.book[i]=response.obj;
   console.log(this.book,'kkkkkkkk');
  // console.log(this.book.bookName,'kkkkkkkk111111111111111111');
   return this.book;
   
    
    
    
  });
  
}
}

}
