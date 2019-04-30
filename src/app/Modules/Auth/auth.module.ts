import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from 'src/app/Components/auth/signup/signup.component';
import { LoginComponent } from 'src/app/Components/auth/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent, // auth module
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
