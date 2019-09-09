import { Component, OnInit } from '@angular/core';
import {AppClientService} from '../shared/app-client.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: AppClientService) { }

  ngOnInit() {
  }

}
