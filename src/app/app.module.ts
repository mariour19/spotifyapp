import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyModule } from './spotify/spotify.module';


@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
