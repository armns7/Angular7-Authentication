import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/Core/base-component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends BaseComponent implements OnInit {

  constructor(protected loginService: LoginService,
    protected router: Router) {
    super(loginService);
  }

  ngOnInit() {
  }

  onLogout() {

    this.loginService.Logout();
    this.router.navigateByUrl('/login');

  }
}
