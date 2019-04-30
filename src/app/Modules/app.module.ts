import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../Components/Secret/dashboard/dashboard.component';
import { UsersComponent } from '../Components/Secret/users/users.component';
import { RolesComponent } from '../Components/Secret/roles/roles.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './common/shared.module';


@NgModule({
  declarations: [

    AppComponent, // root

    DashboardComponent, //  secret module 
    UsersComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
