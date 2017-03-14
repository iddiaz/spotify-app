import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() {
    //1.llama al observable, pero por si solo no funciona ya que no estamos escuchando la respuesta
    this._spotifyService.getArtist('metallica')
    //2.necesitamos escuchar esa respuesta, para eso necesitamos suscribirnos.
      .subscribe( data => {
        //7.tenemos la respuesta en el componente para trabajar
        console.log('ESTO ES DEL SEARCH.component', data);
      });

  }

}
