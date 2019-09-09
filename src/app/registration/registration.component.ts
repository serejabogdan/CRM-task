import { Component, OnInit } from '@angular/core';
import { AppClientService } from '../shared/app-client.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  accounts = [];

  constructor(private service: AppClientService) { }

  ngOnInit() {
    // this.service.request().subscribe(data => this.accounts = data[`accounts?email=${this.email}`]);
  }

}
