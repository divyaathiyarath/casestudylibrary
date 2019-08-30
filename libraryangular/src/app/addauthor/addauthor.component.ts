import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title="Author";

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  onSubmit(data:NgForm)
  {
    this.apiService.addAuthorData(data.value).subscribe((response)=>{
      if(response)
     {
       console.log(response);
       alert("Successfully inserted");
     }
    })
  }

}
