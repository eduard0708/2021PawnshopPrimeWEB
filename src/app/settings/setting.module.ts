import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { CityComponent } from './city.component';
import { BarangayComponent } from './barangay.component';
import { PawnerComponent } from './pawner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../_prime/prime.module';


@NgModule({
  declarations: [
    SettingComponent,
    CityComponent,
    BarangayComponent,
    PawnerComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule
  ]
})
export class SettingModule { }
