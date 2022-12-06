import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { HomeComponent } from './compenents/home/home.component';
import { SignInComponent } from './compenents/sign-in/sign-in.component';
import { SignupComponent } from './compenents/signup/signup.component';

const routes: Routes = [
  {path:'sign-in', component: SignInComponent, },
  {path:'signup', component: SignupComponent, },
  {path:'dashboard', component:DashboardComponent,},
  {path:'home',component:HomeComponent,},
  {path:'', redirectTo:'sign-in', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
