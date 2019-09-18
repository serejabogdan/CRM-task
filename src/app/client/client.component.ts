import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id: string;
  client: Client;

  constructor(
    private route: ActivatedRoute,
    private appClientService: ClientService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.appClientService.getClient(this.id).subscribe(client => this.client = client);
  }
}
