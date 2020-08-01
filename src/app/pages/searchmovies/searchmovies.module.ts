import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchmoviesPageRoutingModule } from './searchmovies-routing.module';

import { SearchmoviesPage } from './searchmovies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchmoviesPageRoutingModule
  ],
  declarations: [SearchmoviesPage]
})
export class SearchmoviesPageModule {}
