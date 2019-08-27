import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  array = [
    {name: 'lsiejg@gmail.com', count: 123},
    {name: 'fire@ukr.net', count: 23},
    {name: 'alle.privet@alert.net', count: 1}
  ];

  constructor() { }

  ngOnInit() {
  }

}
