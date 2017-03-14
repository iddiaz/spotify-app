import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;

  constructor(private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService ) { }

  ngOnInit() {
    //tenemos que acceder al parametro de la ruta que hemos indicado
    //esto ya es un observable por lo que tenemos el map disponible
    this.activatedRoute.params.map( parametro => parametro['id'] )
      //tenemos que suscribirnos para estar escuchando cuando vengan los datos
      .subscribe( id => {
        this._spotifyService.getArtist(id)
          //recibimos los datos y se los asignamos a la variable artista
          .subscribe( data => this.artist = data );
      })
  }

}
