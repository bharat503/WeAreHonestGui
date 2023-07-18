import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employ } from 'src/employ';

@Injectable({
  providedIn: 'root'
})
export class EmployserviceService {
   
 
  constructor(
    private http:HttpClient
  ) { }

  getalldetails():Observable<any>{
    return this.http.get('http://localhost:8090/data');
  }
  getuserdata():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  sendalldetails(emp:employ){
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    return this.http.post('http://localhost:8090/edd',emp,requestOptions);
  }
  
  deletedetail(id:number){
  
      const requestOptions: Object = {
        /* other options here */
        responseType: 'text'
      }
    return this.http.delete('http://localhost:8090/emp/'+id,requestOptions);
  }

}
