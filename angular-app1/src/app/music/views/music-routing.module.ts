import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';
const routes: Routes = [
  {path: 'music', component: SearchComponent},
  {path: 'track', component: TracksComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
