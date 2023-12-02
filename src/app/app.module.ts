import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { AddadminComponent } from './main/addadmin/addadmin.component';
import { AddproductComponent } from './main/addproduct/addproduct.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ViewproductComponent } from './main/viewproduct/viewproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AuthInterceptor } from './loginAuth/auth.interceptor';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    NotfoundComponent,
    MainComponent,
    AddadminComponent,
    AddproductComponent,
    DashboardComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
