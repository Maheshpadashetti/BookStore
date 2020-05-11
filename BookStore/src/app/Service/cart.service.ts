import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private bookApiUrl=environment.BookUrl;
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};

  constructor(private http:HttpClient,private httpService:HttpserviceService) { }

  post( arr:any):Observable<any> {
    console.log(arr,'custmerdetails');
    return this.httpService.post(environment.CartUrl+environment.addUrl,arr,"Pradeep");
  }
  addtocart(bookId:any,userId):Observable<any> {
    console.log(bookId,userId,"ssssssssss");
        return this.httpService.get(environment.CartUrl+environment.addtocart+'/'+bookId+'/'+userId,"");
  }
  getbookprice(bookId:any,quantity):Observable<any> {
    console.log(bookId,quantity,"ssssssssss");
        return this.httpService.post(environment.CartUrl+environment.addtocart,bookId,'/'+quantity);
  }
}
