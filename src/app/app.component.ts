import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [ HomePageComponent,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DigitalBondProject';
}
