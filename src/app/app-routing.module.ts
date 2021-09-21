import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login.component';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transactions/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
