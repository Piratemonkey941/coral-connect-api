import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component'
import { ShinerSystemComponent } from './main/shiner-system/shiner-system.component';
import { BigFourComponent } from './main/big-four/big-four.component';
import { LandingComponent } from './main/landing/landing.component';
import { MajorElemsComponent } from './main/major-elems/major-elems.component';
import { MinorElemsComponent } from './main/minor-elems/minor-elems.component';
import { MinorElemsTwoComponent } from './main/minor-elems-two/minor-elems-two.component';
import { AlkilinityModalComponent } from './main/big-four/alkilinity-modal/alkilinity-modal.component';
import { CalciumComponent } from './main/big-four/calcium/calcium.component';
import { CalciumModalComponent } from './main/big-four/calcium-modal/calcium-modal.component';
import { MagnesiumComponent } from './main/big-four/magnesium/magnesium.component';
import { MagnesiumModalComponent } from './main/big-four/magnesium-modal/magnesium-modal.component';
import { SalinityComponent } from './main/big-four/salinity/salinity.component';
import { SalinityModalComponent } from './main/big-four/salinity-modal/salinity-modal.component';
import { AlkilinityComponent } from './main/big-four/alkilinity/alkilinity.component';
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
    MinorElemsTwoComponent,
    AlkilinityModalComponent,
    CalciumComponent,
    CalciumModalComponent,
    MagnesiumComponent,
    MagnesiumModalComponent,
    SalinityComponent,
    SalinityModalComponent,
    AlkilinityComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
