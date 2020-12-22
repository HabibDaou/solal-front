import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import * as HighchartsMore from "highcharts/highcharts-more.js";
import * as HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const materialModules = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HighchartsChartModule,
    ChartModule,
    ...materialModules,
 
  ],
  providers: [
    {
      provide: HIGHCHARTS_MODULES,
      useFactory: () => [HighchartsMore, HighchartsSolidGauge],
    },
  ]
})
export class HomeModule { }
