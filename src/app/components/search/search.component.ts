import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termn: string = '';

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() { }

  searchArtist() {
    this._spotifyService.getArtists(this.termn)
      .subscribe();
  }

}
