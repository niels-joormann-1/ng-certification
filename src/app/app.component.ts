import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from './zipcode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular';

}
