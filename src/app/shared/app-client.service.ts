import { HttpClient } from '@angular/common/http';

export class AppClientService {

  clients = [
    {name: 'lsiejg@gmail.com', count: 123, id: 1},
    {name: 'fire@ukr.net', count: 23, id: 2},
    {name: 'alle.privet@alert.net', count: 1, id: 3}
  ];

  constructor(private http: HttpClient) { }

  request() {
    return this.http.get('assets/registration.json');
  }
}
