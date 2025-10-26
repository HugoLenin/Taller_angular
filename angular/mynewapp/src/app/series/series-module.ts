import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SeriesList } from './series-list/series-list';

@NgModule({
  declarations: [
    SeriesList
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DecimalPipe
  ],
  exports: [
    SeriesList
  ]
})
export class SeriesModule { }
