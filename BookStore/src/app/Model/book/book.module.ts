import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule {
  bookId :number;
  BookModule:String;
  bookDetails:String;
  authorName:String;
  bookName:String;
  price:number;
  quantity:number;
  image:string;
 }
