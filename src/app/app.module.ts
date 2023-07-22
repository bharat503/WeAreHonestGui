import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination1Component } from './pagination1/pagination1.component';
import { Pagination2Component } from './pagination2/pagination2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    Pagination1Component,
    Pagination2Component
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,MatSortModule,BrowserAnimationsModule,MatTableModule,MatPaginatorModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
