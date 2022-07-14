import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsListComponent } from './spotify/pages/artists-list/artists-list.component';
import { AlbumsComponent } from './spotify/pages/albums/albums.component';
import { AlbumTracksComponent } from './spotify/pages/album-tracks/album-tracks.component';

const routes: Routes = [
  {
      path: '',
      component: ArtistsListComponent,
      pathMatch: 'full'

  },
  {
      path: 'busqueda-de-artistas',
      component: ArtistsListComponent
  },
  {
      path: 'lista-de-albums/:id',
      component: AlbumsComponent

   },
  {
      path: 'lista-de-canciones/:id',
      component: AlbumTracksComponent

  },
   {


      path: '**',
      redirectTo: ''



  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
