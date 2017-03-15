import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  
  artists: any[] = [];

  urlSearch: string = 'https://api.spotify.com/v1/search?';
  urlSearchArtistId: string = 'https://api.spotify.com/v1/artists/';

  constructor( private http: Http ) { }

  getArtists( term: string ) {
    let query = `q=${term}&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get( url )
      .map( res => {
        this.artists = res.json().artists.items;
        console.log('GET ARTISTAS: ', res.json().artists.items);
        return res.json().artists.items;
      });

  }

  getArtist( id: string ) {
    let query = `${id}`;
    let url = this.urlSearchArtistId + query;

    return this.http.get( url )
      .map( res => {
        return res.json();
      });

  }

  getTop( id: string ) {
    let query = `${id}/top-tracks?country=es`;
    let url = this.urlSearchArtistId + query;

    return this.http.get( url )
      .map( res => {
        console.log( 'GET TOP: ', res.json().tracks );

        return res.json().tracks;
      });

  }



}
