import { Component } from '@angular/core';
import { LoginService } from '../Services/Auth/login.service';
import { User } from '../Models/users.model';

@Component({
    template: ''
})
export class BaseComponent {

    //#region Properties

    //#endregion

    //#region Method
    constructor(protected loginService: LoginService) {

    }

    public IsAuthenticated(): boolean {

        return this.loginService.IsAuthenticated();
    }

    public GetLoggedInUser(): User {

        return this.loginService.GetLoggedInUser();
    }

    //#endregion

    //#region Helpers

    //#endregion






}