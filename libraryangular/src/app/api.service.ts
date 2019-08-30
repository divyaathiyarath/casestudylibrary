import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addData(data)
  {
     return this.http.post("http://localhost:3000/readbooksApi",data);
  }
  getData()
  {
    return this.http.get("http://localhost:3000/getdataApi");
  }
  addAuthorData(data)
  {
    return this.http.post("http://localhost:3000/readauthorsApi",data)
  }
  getAuthorData()
  {
    return this.http.get("http://localhost:3000/getAuthorApi");
  }
}
