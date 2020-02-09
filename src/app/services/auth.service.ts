import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isLoggedOut = true;
  isAuthenticated: boolean;
  constructor() { }
  login(form: NgForm) {
      const userCredentials = form.value;
      if (userCredentials.username === 'test@gmail.com' && userCredentials.password === 'test123') {
      localStorage.setItem('username', userCredentials.username);
      this.isLoggedOut = !this.isLoggedOut;
      return true;
    }
      return false;
  }

  logout() {
    localStorage.removeItem('username');
    this.isLoggedOut = !this.isLoggedOut;
  }
    checkUserAuthentication() {
    const getLocalCookie = localStorage.getItem('username');
    if (getLocalCookie === 'test@gmail.com') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
}
