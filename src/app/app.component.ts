
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { NgFor } from '@angular/common';
import { employ } from 'src/employ';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import { EmployserviceService } from './Services/employservice.service';
import { NgForm } from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  toggleOn:any;
  Persondata:Array<any>=[];
  
  UserData:Array<any>=[];
  emp:employ;
  message:any;
   
  
 
  constructor(private empservice:EmployserviceService ){
    this.emp= new employ();
    
    
    this.empservice.getalldetails().subscribe((response)=>{
      console.log(response);
      this.Persondata=response;
      
      
    })
    this.empservice.getuserdata().subscribe((response)=>{
      console.log(response);
      this.UserData=response;
    })
      }
  public deleteItem(id:number){
   
   this.empservice.deletedetail(id).subscribe((response)=>{
      this.message=response;
      
    })
    setTimeout(()=>{
      console.log("3 second");
      window.location.reload();
    },1000);
     
    }
    showDiv = {
      add:false
    }
    
    insert(DataAdd:NgForm){
     console
      this.empservice.sendalldetails(this.emp).subscribe((response)=>{
        console.log(response);
      });
      setTimeout(()=>{
      console.log("3 second");
      window.location.reload();
    },1000);
  }
   

   
}