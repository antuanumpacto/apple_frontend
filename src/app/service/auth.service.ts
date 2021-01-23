import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken() {
    return localStorage.getItem("token");
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return token ? true : false;
  }
}
