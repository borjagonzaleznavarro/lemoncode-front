import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router) {}

  islogged: boolean = false;
  username: string;
  password: string;
  spinnerState: boolean = false;

  login(username: string, password: string): Observable<boolean> {
    if (username == 'master8@lemoncode.net' && password == '12345678') {
      this.islogged = true;
      this.username = username;
      localStorage.setItem("login", this.username);
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  logout(): void {
    localStorage.removeItem("login");
    this.router.navigateByUrl("/home");
  }

  isLogged(): boolean {
    if (localStorage.getItem("login")) {
      return true;
    }
    return false;
  }

  getUsername(): string {
    return localStorage.getItem("login");
  }

  setSpinnerState(v: boolean): void {
    this.spinnerState = v;
  }

  getSpinnerState(): boolean {
    return this.spinnerState;
  }
}
