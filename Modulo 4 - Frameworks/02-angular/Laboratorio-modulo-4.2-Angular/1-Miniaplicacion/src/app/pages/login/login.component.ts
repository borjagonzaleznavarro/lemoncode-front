import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  loginSuccess: boolean = true;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.createLoginForm();
  }

  handleLogin() {
    this.loginSuccess = true;
    this.authService.setSpinnerState(true);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (v) => {
        this.authService.setSpinnerState(false);
        if (v) {
          this.router.navigateByUrl('/dashboard');
        }
        else {
          this.loginSuccess = false;
        }
      },
      (e) => {
        console.log(`There was something wrong: ${e}`);
      }
    );
  }

  ngOnInit(): void {
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.usernameControl = this.loginForm.get('username') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }
}
