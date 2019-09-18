import { Component, OnInit } from '@angular/core';
import { ClientService } from './shared/client.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService, AuthService]
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
