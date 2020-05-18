import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
import { ThrowStmt } from '@angular/compiler';
import { CartService } from 'src/app/Service/cart.service';
import { Customer } from 'src/app/Model/customer.model';
import { Address } from 'src/app/Model/address.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selected : boolean = false;
  isLinear = false;
  customerForm: FormGroup;
  book=[];
  books: BookModule = new BookModule();
  element:BookModule = new BookModule();
  items = [];
  pageofItems : Array<BookModule> = new Array<BookModule>();
  obj : BookModule[];
  size: number;
  book_id:number;
  bookSearch: any;
  bookName: string;
  length : any = sessionStorage.length;
  si : any = sessionStorage.length;
  value:any=[];
  UserId:number;
 
  quantity = 1;
  customer:Customer=new Customer();
  type:any;
  bid:any;
  user  : number;
  num=2;
selectedtype : any;
  @Output() output : EventEmitter<any> = new EventEmitter();
select : boolean = false;
addre : Address = new Address();

  constructor( private matSnackBar: MatSnackBarModule,
    private formBuilder: FormBuilder,
    private route: Router,private service : BookService,private cartService:CartService) { }

    phoneNumber=new FormControl('',[Validators.required,Validators.pattern('[0-9]{10,10}')]);
    Name=new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
    pincode=new FormControl('',[Validators.required]);
    address=new FormControl('',[Validators.required]);
    locality=new FormControl('',[Validators.required]);
    city=new FormControl('',[Validators.required]);
    landmark=new FormControl('',[Validators.required]);
    Home=new FormControl('',[Validators.required]);
    Work=new FormControl('',[Validators.required]);
    Other=new FormControl('',[Validators.required]);

  ngOnInit()  {
   this.getsession();
    }

Toggle() {
  if( this.select == false) {
    this.select = true;
  }
  else if( this.select == true) {
    this.select = false;
  }
}

tog() {
  if( this.selected == false) {
    this.selected = true;
  }
  else if( this.selected == true) {
    this.selected = false;
  }
}

Removecart(key){
  console.log("hii");
  // let key=sessionStorage.key(2);
  // this.value[2]=sessionStorage.getItem(key);
  sessionStorage.removeItem(key);
  window.location.reload();
  console.log("heyyy");
}

getsession() {
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
 fun(type) {
  this.selectedtype = type;
}

OnRegisterSubmit(){
console.log("type--"+this.selectedtype);

this.addre.address = this.address.value;
this.addre.city = this.city.value;
this.addre.landmark = this.landmark.value;
this.addre.locality = this.locality.value;
this.addre.pincode = this.pincode.value;
  
if(this.selectedtype == "Home") {
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    home : this.addre
    
  };
  console.log("Home----");
    this.cartService.post(Customer).subscribe((response:any)=>{
     this.bid=response.obj;
     this.user = this.bid.userId;
      console.log(response);
      console.log(this.bid);
      console.log(response,'Success...');
      console.log("data"+Customer.phonenumber);
      console.log("data+++"+this.phoneNumber.value);
      this.addtcart(this.user);
//       let navigationExtras : NavigationExtras =  {
// queryParams : {
//   "bookId" :  this.book,
//   "UserId" : this.bid.output
// }
//       }
//      return this.route.navigate(['/userinfo'], )
    }); 
   
 }
 if(this.selectedtype == "Work") {
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    work : this.addre
  };

    this.cartService.post(Customer).subscribe((response:any)=>{
      this.bid = response.obj;
      this.user = this.bid.userId;
      console.log(response,'Success...');
      console.log("data"+Customer.phonenumber);
      console.log("data+++"+this.phoneNumber.value);
      this.addtcart(this.user);
    }); 
    // this.addtcart( this.user);
 }
 if(this.selectedtype == "Other") {
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    other : this.addre
  };

    this.cartService.post(Customer).subscribe((response:any)=>{
      this.bid = response.obj;
this.user = this.bid.userId;
      console.log(response,'Success...',this.user);
      console.log("data"+this.bid.userId);
      console.log("data+++"+this.phoneNumber.value);
      this.addtcart(this.user);
    }); 
    // this.addtcart(this.user);
 }
}


addtcart( user : any){
  for(let i=0;i<sessionStorage.length;i++){
    let key=sessionStorage.key(i);
    this.value[i]=sessionStorage.getItem(key);
    console.log("key",key);
    console.log("ghgvvb====="+user);
    
    console.log("---"+this.bid);
    this.cartService.addtocart(this.value[i],user).subscribe((response:any)=>{
     console.log(response);
     this.book[i]=response.obj;
     console.log(this.book,'kkkkkkkk');
    // console.log(this.book.bookName,'kkkkkkkk111111111111111111');
    //  return this.book;
 
});
}
}

getprice():any{
  for(let i=0;i<sessionStorage.length;i++){
    let key=sessionStorage.key(i);
    this.value[i]=sessionStorage.getItem(key);
    console.log("key",key);
    this.quantity=3;
    this.cartService.getbookprice(this.value[i],this.quantity).subscribe((response:any)=>{
     console.log(response);
     this.book[i]=response.obj;
     console.log(this.book,'kkkkkkkk');
    // console.log(this.book.bookName,'kkkkkkkk111111111111111111');
     return this.book;
    });
    
  }
  }

  
    addItem(){
      this.quantity=this.quantity+1;
      //localStorage.setItem(this.quantity);

      console.log('plus is : '+this.quantity)


      }

      removeItem(){
        this.quantity=this.quantity-1;
        console.log('plus is : '+this.quantity)
        
      
        }


        removelocal(){
          sessionStorage.clear();
        }
        

        addquantity(){
          for(let i=0;i<sessionStorage.length;i++){
            let key=sessionStorage.key(i);
            this.value[i]=sessionStorage.getItem(key);
            console.log("key",key);
            console.log("ghgvvb====="+this.user);
        
            this.cartService.addquantity(this.value[i],this.quantity).subscribe((response:any)=>{
             console.log(response);
             this.book[i]=response.obj;
             console.log(this.book,'kkkkkkkk');
            // console.log(this.book.bookName,'kkkkkkkk111111111111111111');
            //  return this.book;
         
        });
        }
        }
}