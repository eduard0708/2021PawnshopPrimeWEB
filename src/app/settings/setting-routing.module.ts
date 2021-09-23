import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangayComponent } from './barangay.component';
import { CityComponent } from './city.component';
import { PawnerComponent } from './pawner.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  { path: 'city', component: CityComponent },
  { path: 'barangay', component: BarangayComponent },
  { path: 'pawner', component: PawnerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
