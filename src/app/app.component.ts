import { Component } from '@angular/core';
import { ThankYouComponent } from './thank-you/thank-you.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThankYouComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thank-you-app';
}
