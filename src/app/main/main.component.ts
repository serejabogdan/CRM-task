import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

import { Client } from '../shared/client';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clients: Client[];

  constructor(
    private clientService: ClientService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(data => this.clients = data);
  }

  logout() {
    this.authService.logout();
  }
}
