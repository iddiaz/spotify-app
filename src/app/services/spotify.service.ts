import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  
  artists: any[] = [];

  urlSearch: string = 'https://api.spotify.com/v1/search?';

  constructor( private http: Http ) { }

  getArtist( term: string ) {
    let query = `q=${term}&type=artist`;
    let url = this.urlSearch + query;
    
    //3.devuelve un obserbable a algo 
    return this.http.get( url )
    //4. lo convertimos a objeto usando un map
      .map( res => {
        //5.la respuesta cuando se usa a traves del map, trae una propiedad que se llama json        
        // console.log(res.json().artists.items );
        this.artists = res.json().artists.items;
        console.log(this.artists);

        //6. si retornamos la respuesta ya la podemos trabajar desde el componente
        return res.json().artists.items; //SearchComponent
      });

  }

}
