import { Injectable } from '@angular/core';


// Service is generated but not provided, it must be provided to be used
@Injectable()
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}
