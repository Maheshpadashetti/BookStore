import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private searchBookData = new Subject<any>();
  private bookApiUrl=environment.BookUrl;
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};

  constructor(private http:HttpClient,private httpService:HttpserviceService) { }
  
  
  getallBooks(){
    return this.http.get<any>(environment.BookUrl+environment.getallbooksurl);
  }

  setSearchBookData(message: any) {
    console.log("set service", message);
    return this.searchBookData.next({ books: message });
  }
  getSearchBookData(): Observable<any> {
    console.log("get service");
    return this.searchBookData.asObservable();
  }

  getBokkByid(Bookid:any):Observable<any>
  { 
    console.log(Bookid,'hhhhbookid');
    
    return this.httpService.get(this.bookApiUrl+environment.getbookbyIdurl+'/'+Bookid,this.httpOptions); 
  }
  
}
