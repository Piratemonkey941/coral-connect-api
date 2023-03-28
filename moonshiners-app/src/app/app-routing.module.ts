import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GraphsComponent } from './pages/graphs/graphs.component';

const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
