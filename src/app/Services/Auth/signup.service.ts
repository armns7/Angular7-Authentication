import { Injectable } from '@angular/core';
import { User } from '../../Models/users.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  //#region Properties

  private _usersListKey = 'usersKey';

  //#endregion

  //#region Methods

  constructor() { }

  public Signup(userName: string): Promise<boolean> {

    return new Promise((resolve, reject) => {

      setTimeout(_ => {
        if (userName != null && userName != '') {

          this.SaveUser(userName);
          resolve(true);

        } else {

          reject(false);

        }
      })

    });

  }

  //#endregion

  //#region Helpers

  private GetUsers(): User[] {

    const usersDataString = localStorage.getItem(this._usersListKey);

    if (usersDataString != null && usersDataString != '') {

      const users = <User[]>JSON.parse(usersDataString);

      if (users && users.length)
        return users;

    }

    return <User[]>[];
  }

  private SaveUser(userName: string) {

    const users = this.GetUsers();

    if (users) {
      let foundUser = users.find((u, i) => u.UserName == userName);
      if (foundUser == null)
        users.push(new User(userName));

    }

    localStorage.setItem(this._usersListKey, JSON.stringify(users));

  }

  //#endregion

}
