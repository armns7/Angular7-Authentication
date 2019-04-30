import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/users.model';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }


  onSubmit(loginForm: NgForm) {

    const model = <User>loginForm.value;

    if (model) {

      try {

        this.loginService.Login(model.UserName).then(l => {

          console.dir(l);
          // this.router.navigateByUrl('/');
          this.router.navigate(['/']);

        }).catch(e => {

          if (e == null)
            console.dir('invalid user');
            alert('invalid user');

        });

      } catch (error) {

      }

    } else {

      console.log('user name required.');

    }

  }

}
