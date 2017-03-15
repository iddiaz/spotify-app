//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//services
import { SpotifyService } from './services/spotify.service';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { APPROUTING } from './app.routes';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SinfotoPipe,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APPROUTING
  ],
  providers: [ 
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
