import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../../services/spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { AlbumsResponseInterface } from '../../interfaces/AlbumsResponseInterface.interface';
import { ItemAlbum } from '../../interfaces/ItemsAlbumInterface.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

   private albumReq!:AlbumsResponseInterface;
    itemsAlbum: ItemAlbum[]=[];
  private _token: string ='';
  constructor(private activatedRoute: ActivatedRoute,private spotifyService:SpotifyServiceService) {

    this._token = JSON.parse(localStorage.getItem('token')!) || '';
  console.log("El token es: "+this._token);
   }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.spotifyService.buscarAlbumsArtista(this._token,id)))
      .subscribe(x=> this.itemsAlbum= x.items );



  /*  this.spotifyService.obtenerToken().subscribe(token =>  {
      this.spotifyService.buscarAlbumsArtista(token.access_token).subscribe(resp =>{ console.log(resp)} );
  
     });*/

     
  }

}
