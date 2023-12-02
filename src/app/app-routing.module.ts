import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './loginAuth/auth.guard';
import { AddadminComponent } from './main/addadmin/addadmin.component';
import { AddproductComponent } from './main/addproduct/addproduct.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ViewproductComponent } from './main/viewproduct/viewproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'addproduct',
        component: AddproductComponent
      },
      {
        path: "viewproduct",
        component: ViewproductComponent
      },
      {
        path: "addadmin",
        component: AddadminComponent
      }
    ]
  },
  {
    path: '**',
    component:NotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

