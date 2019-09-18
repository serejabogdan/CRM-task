import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: ClientService,
    private fb: FormBuilder
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
  }
}
