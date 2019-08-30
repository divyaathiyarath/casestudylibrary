import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-viewauthor',
  templateUrl: './viewauthor.component.html',
  styleUrls: ['./viewauthor.component.css']
})
export class ViewauthorComponent implements OnInit {
  title="Author"
 myData:Array<object>=[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData()
  {
    this.apiService.getAuthorData().subscribe((response:Array<object>)=>{
      if(response)
      {
        this.myData=response;
      }
    })
  }

}
