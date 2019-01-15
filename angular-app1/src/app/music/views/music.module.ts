import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  declarations: [SearchComponent, ArtistsComponent, AlbumsComponent, TracksComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
