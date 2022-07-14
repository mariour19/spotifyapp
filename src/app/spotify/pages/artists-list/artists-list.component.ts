import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../../services/spotify-service.service';

import { ArtistInterface } from '../../interfaces/ArtistInterface.interface';
import { Item } from '../../interfaces/ItemsArtists.interface';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  private _token:string = '';
  artistas!:ArtistInterface;
  termino: string = 'M';
  hayError: boolean = false;

  itemsArtists: Item[]=[];

  constructor(private spotifyService:SpotifyServiceService) { 

    this._token = JSON.parse(localStorage.getItem('token')!) || '';
  }

  ngOnInit(): void {
  
   this.spotifyService.obtenerToken().subscribe(token =>  {


    this.spotifyService.buscarArtista(token.access_token,"Strokes").subscribe(resp =>{ this.artistas= resp;this.itemsArtists= this.artistas.artists.items ;console.log(this.itemsArtists)} );

   });

   
 
  }
  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

   
    console.log("Este es el termino:" +this.termino);
    this.spotifyService.obtenerToken().subscribe(token =>  { this._token = token.access_token ;localStorage.setItem('token', JSON.stringify(this._token));
      this.spotifyService.buscarArtista(token.access_token, this.termino).subscribe(resp =>{ this.artistas= resp;this.itemsArtists= this.artistas.artists.items ;},(err)=>{
          this.hayError = true;
          this.itemsArtists=[];

      } );
  
     });
  
   
    };



}
