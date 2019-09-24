import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        email: [
          '',
          [Validators.email, Validators.required]
        ],
        name: [
          '',
          Validators.minLength(1)
        ],
        password: [
          '',
          Validators.minLength(6)
        ]
      });
    }

  submit() {
    console.log('Form: ', this.form);
    const formData = this.form.value;
    console.log('Form data: ', formData);

    this.authService.registration(formData.email, formData.password);
    this.router.navigate(['/main']);
  }
}
