import { Component } from '@angular/core';
import { AppClientService } from './shared/app-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppClientService]
})
export class AppComponent {
  title = 'CRM';
}
