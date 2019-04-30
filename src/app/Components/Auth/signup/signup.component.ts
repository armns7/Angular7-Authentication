import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/users.model';
import { SignupService } from 'src/app/Services/Auth/signup.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Auth/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(singupForm: NgForm) {

    const model = <User>singupForm.value;

    if (model) {

      try {

        this.signupService.Signup(model.UserName).then(l => {

          console.dir(l);

          this.loginService.Login(model.UserName).then(_ => {

            this.router.navigateByUrl('/');

          });

        }).catch(e => {

          if (e == null) {
            console.dir('error occured!');
            alert('error occured!');
          }

        });

      } catch (error) {

      }

    } else {

      console.log('user name required.');

    }

  }

}
