import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumTracksComponent } from './pages/album-tracks/album-tracks.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistsListComponent } from './pages/artists-list/artists-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({


declarations:[
AlbumTracksComponent,
AlbumsComponent,
ArtistsListComponent
]
    ,

exports:[
AlbumTracksComponent,
AlbumsComponent,
ArtistsListComponent,


]
,  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule



  ]

})

export class SpotifyModule { }
