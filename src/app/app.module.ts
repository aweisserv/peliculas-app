import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

//Servicios
import { PeliculasService } from "./services/peliculas.service"

//Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { APP_ROUTING } from "./app.routes"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { AppRoutingModule } from './app-routing.module';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './components/peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PosterPipe } from './pipes/poster.pipe';
import { CastSlideshowComponent } from './components/cast-slideshow/cast-slideshow.component';
import { ProfileImage } from './pipes/profile-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    PosterPipe,
    ProfileImage,
    CastSlideshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
