import { Injectable } from '@angular/core';
import { User } from '../../Models/users.model';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //#region Properties

  private _secretUser: User = new User("admin");

  private _userKey: string = "loggedInUser";
  private _usersListKey = 'usersKey';


  //#endregion

  //#region Methods

  constructor() { }

  public Login(userName: string, password?: string): Promise<User> {

    return new Promise((res, rej) => {

      let usersFromDB = this.GetUsers();

      setTimeout(_ => {

        let userFound = usersFromDB.find((u, i) => u.UserName == userName);

        if ((userName == this._secretUser.UserName) || (userFound && userFound.UserName == userName)) {
          const model = new User(userName);
          localStorage.setItem(this._userKey, JSON.stringify(model));
          res(model);
        }
        else
          rej(null);

      });

    });

  }

  public Logout() {

    localStorage.removeItem(this._userKey);
  }

  public IsAuthenticated(): boolean {

    return this.GetLoggedInUser() != null;
  }

  //#endregion

  //#region Helpers

  public GetLoggedInUser(): User {

    const userKeyDataString = localStorage.getItem(this._userKey);

    if (userKeyDataString !== null && userKeyDataString !== '') {

      const model = JSON.parse(userKeyDataString);

      if (model)
        return model;

    }

    return null;
  }

  private GetUsers(): User[] {

    const usersDataString = localStorage.getItem(this._usersListKey);

    if (usersDataString != null && usersDataString != '') {

      const users = <User[]>JSON.parse(usersDataString);

      if (users && users.length)
        return users;

    }

    return <User[]>[];
  }
  //#endregion

}
