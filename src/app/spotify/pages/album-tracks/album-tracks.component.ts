import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../../services/spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ItemCancionesAlbum } from '../../interfaces/AlbumItemCancionesResponse.interface';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.css']
})
export class AlbumTracksComponent implements OnInit {
  private _token: string ='';
  itemsAlbum:ItemCancionesAlbum []=[];
  constructor(private activatedRoute: ActivatedRoute,private spotifyService:SpotifyServiceService) { 
    this._token = JSON.parse(localStorage.getItem('token')!) || '';
  console.log("El token es: "+this._token);

  }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.spotifyService.buscarCanionesAlbum(this._token,id)))
      .subscribe(x=> {this.itemsAlbum= x.items; console.log(this.itemsAlbum)} );

  }

}
