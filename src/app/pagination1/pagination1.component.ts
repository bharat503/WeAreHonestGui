
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { DataService } from 'src/app/Services/data.service';
import { EmployserviceService } from 'src/app/Services/employservice.service';


@Component({
  selector: 'app-pagination1',
  templateUrl: './pagination1.component.html',
  styleUrls: ['./pagination1.component.scss']
})
export class Pagination1Component {
  dataSource: any = [];

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  columnsToDisplay = ['name', 'username', 'email', 'website'];
  
  constructor(private service: DataService) {


    
  }

  ngOnInit() {
    this.service.getUsers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
}
