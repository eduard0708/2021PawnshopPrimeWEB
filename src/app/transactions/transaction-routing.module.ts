import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additional.component';
import { NewloanComponent } from './newloan.component';
import { PartialComponent } from './partial.component';
import { RedeemComponent } from './redeem.component';
import { RenewComponent } from './renew.component';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
  { path: '', component: TransactionComponent },
  {path:'newloan', component:NewloanComponent},
  {path:'redeem', component:RedeemComponent},
  {path:'partial', component:PartialComponent},
  {path:'additional', component:AdditionalComponent},
  {path:'renew', component:RenewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
