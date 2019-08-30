import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
 title="Books";
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
onSubmit(data:NgForm)
{

  this.apiService.addData(data.value).subscribe((response)=>{
      
    if(response)
    {
      alert("Successfully inserted");
    }

  })

}

}
