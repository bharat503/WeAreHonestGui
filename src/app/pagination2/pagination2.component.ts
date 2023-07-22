import { AfterViewInit, Component,OnInit,ViewChild} from '@angular/core';
import { employ } from 'src/employ';
import { EmployserviceService } from '../Services/employservice.service';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-pagination2',
  templateUrl: './pagination2.component.html',
  styleUrls: ['./pagination2.component.scss']
})
export class Pagination2Component implements AfterViewInit{
  
  toggleOn:any;
  Persondata:any=[];
  
  UserData:any=[];
  emp:employ;
  message:any;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();
   
  columnsToDisplay = ['id', 'userId', 'title', 'body'];
  columnsToDisplay1 = ['id', 'name', 'age', 'add','delete'];
  constructor(private empservice:EmployserviceService ){
    this.emp= new employ();
    
    
    
    
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
  ngAfterViewInit() {
    
    this.empservice.getuserdata().subscribe((response: any) => {
      this.UserData = new MatTableDataSource(response);
      this.UserData.paginator = this.paginator;
      this.UserData.sort=this.empTbSortWithObject;
    })
    this.empservice.getalldetails().subscribe((response)=>{
      console.log(response);
      this.Persondata=new MatTableDataSource(response);
      this.Persondata.sort=this.empTbSort ;
      
    })
  }
}
