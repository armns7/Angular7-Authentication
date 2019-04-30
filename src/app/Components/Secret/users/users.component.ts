import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { BaseComponent } from 'src/app/Core/base-component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BaseComponent implements OnInit {

  constructor(protected loginService: LoginService) {
    super(loginService);
  }

  ngOnInit() {
  }

}
