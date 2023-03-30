import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { BigFourComponent } from './main/big-four/big-four.component';
import { LandingComponent } from './main/landing/landing.component';
import { MajorElemsComponent } from './main/major-elems/major-elems.component';
import { MinorElemsComponent } from './main/minor-elems/minor-elems.component';
import { MinorElemsTwoComponent } from './main/minor-elems-two/minor-elems-two.component';
import { MinorElemsThreeComponent } from './main/minor-elems-three/minor-elems-three.component';
import { ShinerSystemComponent } from './main/shiner-system/shiner-system.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/materials.module'
// import {} from ''


// import { Chart } from 'chart.js';
// import { AlkilinityComponent } from './main/big-four/alkilinity/alkilinity.component';
// import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BigFourComponent,
    LandingComponent,
    MajorElemsComponent ,
    ModalComponent,
    MinorElemsComponent,
    MinorElemsTwoComponent,
    MinorElemsThreeComponent,
    ShinerSystemComponent,
    SignupComponent,
    SigninComponent,
    GraphsComponent,

    // CustomSnackBarComponant,
    // DialogComponent,
    // AlkilinityComponent,


  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    // AngularFullpageModule,
    // Chart,
  ],
  
  // providers: [],
  // BS: [AppComponent]
})
export class AppModule { }
