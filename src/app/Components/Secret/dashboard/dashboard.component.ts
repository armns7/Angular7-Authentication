import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Auth/login.service';
import { SecretService } from 'src/app/Services/Secret/secret.service';
import { BaseComponent } from 'src/app/Core/base-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  private noOfMissions = [];

  constructor(protected loginService: LoginService,
    protected secretService: SecretService) {
      
    super(loginService);
    
  }

  ngOnInit() {

    let loggedInUser = this.loginService.GetLoggedInUser();

    if (loggedInUser)
      this.noOfMissions = this.secretService.GetAgentMissions(loggedInUser.UserName);

  }



}
