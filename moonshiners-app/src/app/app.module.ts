import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component'
import { ShinerSystemComponent } from './main/shiner-system/shiner-system.component';
import { BigFourComponent } from './main/big-four/big-four.component';
import { LandingComponent } from './main/landing/landing.component';
import { MajorElemsComponent } from './main/major-elems/major-elems.component';
import { MinorElemsComponent } from './main/minor-elems/minor-elems.component';
// import {} from ''

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShinerSystemComponent,
    BigFourComponent,
    LandingComponent,
    MajorElemsComponent ,
    MinorElemsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
