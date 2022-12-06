import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './compenents/signup/signup.component';
import { SignInComponent } from './compenents/sign-in/sign-in.component';
import { ServicesComponent } from './compenents/services/services.component';
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { HomeComponent } from './compenents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignInComponent,
    ServicesComponent,
    DashboardComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
