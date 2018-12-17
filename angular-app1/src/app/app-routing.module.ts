import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'detail/:id', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
