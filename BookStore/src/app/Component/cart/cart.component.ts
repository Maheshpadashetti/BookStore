import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
import { ThrowStmt } from '@angular/compiler';
import { CartService } from 'src/app/Service/cart.service';
import { Customer } from 'src/app/Model/customer.model';

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
  UserId:number;
 // quantity:number;
  quantity = 1;
  customer:Customer=new Customer();
  type:any;
  @Output() output : EventEmitter<any> = new EventEmitter();
select : boolean = false;

  constructor( private matSnackBar: MatSnackBarModule,
    private formBuilder: FormBuilder,
    private route: Router,private service : BookService,private cartService:CartService) { }

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

Toggle() {
  if( this.select == false) {
    this.select = true;
  }
  else if( this.select == true) {
    this.select = false;
  }
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


addtocartupdate(UserId,quantity,book_id){
  this.cartService.addtocartupdate(UserId,quantity,book_id).subscribe((response:any)=>{
    this.quantity=response.obj;
    return this.quantity;
    });
    
  
}
phoneNumber=new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10,10}')]);
Name=new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]);
pincode=new FormControl(null,[Validators.required]);
address=new FormControl(null,[Validators.required]);
locality=new FormControl(null,[Validators.required]);
city=new FormControl(null,[Validators.required]);
landmark=new FormControl(null,[Validators.required]);



OnRegisterSubmit(){
    this.customer.Name=this.Name.value;
    this.customer.Phonenumber=this.phoneNumber.value;
    this.customer.Address=this.address.value;
    this.customer.City=this.city.value;
    this.customer.Landmark=this.landmark.value;
    this.customer.Pincode=this.pincode.value;
    this.customer.Locality=this.locality.value;
    this.cartService.post(this.customer).subscribe((response:any)=>{
      console.log(response,'jjjj');
      
    });
    
 }
}