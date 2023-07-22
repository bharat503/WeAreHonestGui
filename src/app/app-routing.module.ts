import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination1Component } from './pagination1/pagination1.component';
import { Pagination2Component } from './pagination2/pagination2.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component:PaginationComponent},
  { path: 'app-pagination', component:PaginationComponent},
  { path: 'app-pagination1', component:Pagination1Component  },
  { path: 'app-pagination2', component:Pagination2Component  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
