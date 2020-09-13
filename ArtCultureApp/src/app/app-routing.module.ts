import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomePageComponent} from './home-page/home-page.component';
import{ProductPageComponent} from './product-page/product-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MultiColorArtComponent } from './multi-color-art/multi-color-art.component';
import { NatureArtComponent } from './nature-art/nature-art.component';
import { PencilSketchesComponent } from './pencil-sketches/pencil-sketches.component';
import { DarkThemeArtComponent } from './dark-theme-art/dark-theme-art.component';
import { AnimalPaintingsComponent } from './animal-paintings/animal-paintings.component';
import { BlackAndWhitePaintingsComponent } from './black-and-white-paintings/black-and-white-paintings.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'product-page',component:ProductPageComponent},
  {path:'about-page',component:AboutPageComponent},
  {path:'multi-color-art',component:MultiColorArtComponent},
  {path:'nature-art',component:NatureArtComponent}, 
  {path:'pencil-sketches',component:PencilSketchesComponent},
  {path:'dark-theme-art',component:DarkThemeArtComponent},
  {path:'animal-paintings',component:AnimalPaintingsComponent},
  {path:'black-and-white-painitings',component:BlackAndWhitePaintingsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
