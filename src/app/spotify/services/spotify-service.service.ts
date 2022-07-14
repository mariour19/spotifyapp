import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenSpotify } from '../interfaces/TokenSpotify.interface';
import { ArtistInterface } from '../interfaces/ArtistInterface.interface';
import { AlbumsResponseInterface } from '../interfaces/AlbumsResponseInterface.interface';
import { AlbumsCancionesInterface } from '../interfaces/AlbumCancionesResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

  private apiTokenSpotify = 'https://accounts.spotify.com/api/token'
  private apiSpotify = 'https://api.spotify.com/v1/'

  private client_id = '079cd22721f248d4ab0c936f96712557';
  private client_secret = 'd8670c161c1c4e10b53f9d88b3f1cd34';



  constructor(private http: HttpClient) { }


  obtenerToken(): Observable<TokenSpotify> {
    let params = ('grant_type=client_credentials');
    let encoded = btoa(this.client_id + ':' + this.client_secret);

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encoded
    });
    let options = { headers: headers };
    this.http.post<TokenSpotify>(this.apiTokenSpotify, params, options).subscribe(x => console.log("toookenn :  " + x.access_token));

    return this.http.post<TokenSpotify>(this.apiTokenSpotify, params, options).pipe(tap(console.log));
  }





  buscarArtista(token: string, termino: string): Observable<ArtistInterface> {

    let params = new HttpParams().set("limit", 3).set("offset", 0).set("q", termino).set("type", "artist").set("market", "es");
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    const url = `${this.apiSpotify}search`;


    return this.http.get<ArtistInterface>(url, { headers, params });


  }


  buscarAlbumsArtista(token: string, id: string): Observable<AlbumsResponseInterface> {

    let params = new HttpParams().set("limit", 6).set("offset", 0);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    const url = `${this.apiSpotify}artists/${id}/albums`;


    return this.http.get<AlbumsResponseInterface>(url, { headers, params });


  }

  buscarCanionesAlbum(token: string, id: string): Observable<AlbumsCancionesInterface> {

    let params = new HttpParams().set("limit", 5).set("market","ES");
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    const url = `${this.apiSpotify}albums/${id}/tracks`;


    return this.http.get<AlbumsCancionesInterface>(url, { headers, params });


  }


}
