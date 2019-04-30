import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { BaseComponent } from 'src/app/Core/base-component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent extends BaseComponent implements OnInit {

  constructor(protected loginService:LoginService) { 
    super(loginService);
  }

  ngOnInit() {
  }

}
