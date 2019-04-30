import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor() { }

  public GetAgentMissions(userName: string) {

    const randomNumber = Math.floor(Math.random() * 5);
    let noOfMissions = Array.from({ length: (randomNumber < 1 ? 1 : randomNumber) }, (v, i) => `Mission ${i + 1}.`); // put it in service

    let savedMissions = localStorage.getItem(userName);

    if (savedMissions != null && savedMissions != '')
      noOfMissions = <string[]>JSON.parse(savedMissions);

    localStorage.setItem(userName, JSON.stringify(noOfMissions));

    return noOfMissions;
  }
}
