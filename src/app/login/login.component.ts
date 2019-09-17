import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  message: string;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/main']);
      }
    });

    this.loginForm = this.formBuilder.group({ // reactive form
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.minLength(6)]
    });

  }

  submit() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then( response => {
        this.loggedIn = true;
        this.message = 'Logged successful';

        this.router.navigate(['/main']);
      })
      .catch( error => {
        this.loggedIn = false;
        console.log(this.loggedIn);
        this.message = error;
      });
  }

}
