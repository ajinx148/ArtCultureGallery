import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MultiColorArtComponent } from './multi-color-art/multi-color-art.component';
import { NatureArtComponent } from './nature-art/nature-art.component';
import { PencilSketchesComponent } from './pencil-sketches/pencil-sketches.component';
import { DarkThemeArtComponent } from './dark-theme-art/dark-theme-art.component';
import { AnimalPaintingsComponent } from './animal-paintings/animal-paintings.component';
import { BlackAndWhitePaintingsComponent } from './black-and-white-paintings/black-and-white-paintings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutPageComponent,
    MultiColorArtComponent,
    NatureArtComponent,
    PencilSketchesComponent,
    DarkThemeArtComponent,
    AnimalPaintingsComponent,
    BlackAndWhitePaintingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
