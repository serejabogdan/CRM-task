import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';

import { Client } from '../shared/client';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(data => this.clients = data);
  }

}
