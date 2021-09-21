import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { SidenavComponent } from './layout/sidenav.component';
import { FooterComponent } from './layout/footer.component';
import { NewloanComponent } from './transactions/newloan.component';
import { RedeemComponent } from './transactions/redeem.component';
import { RenewComponent } from './transactions/renew.component';
import { AdditionalComponent } from './transactions/additional.component';
import { PartialComponent } from './transactions/partial.component';
import { LoginComponent } from './pages/login.component';
import { ErrorComponent } from './pages/error.component';
import { NotfoundComponent } from './pages/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './_cards/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    NewloanComponent,
    RedeemComponent,
    RenewComponent,
    AdditionalComponent,
    PartialComponent,
    LoginComponent,
    ErrorComponent,
    NotfoundComponent,
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
