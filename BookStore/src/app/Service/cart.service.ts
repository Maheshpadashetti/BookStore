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

  addtocartupdate(userId,quantity,BookId):Observable<any>{
   
    return this.httpService.post(this.bookApiUrl+environment.addandupdatecartUrl+'?BookId='+BookId,'&userId='+userId+{quantity},this.httpOptions); 
  }

  post( arr) {
    return this.httpService.post(environment.CartUrl+environment.addUrl, arr, "");
  }
}
