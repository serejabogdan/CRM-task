import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id: string;

  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
