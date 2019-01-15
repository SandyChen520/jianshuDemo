import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './views/index/index.component';
import {HomeComponent} from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { EditComponent } from './views/edit/edit.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'edit', component:EditComponent},
  {path:'', component:IndexComponent,children:[
    {path:'', component:HomeComponent},
    {path:'detail/:id', component:DetailComponent}
  ]},
  // {path:'detail/:id', component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
