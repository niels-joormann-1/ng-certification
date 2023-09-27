import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from './zipcode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular';
  zipcodeSubscription = new Subscription();

  zipcodes: string[] = [];
  constructor(private zipcodeService: ZipcodeService){}

  ngOnInit(): void {
    //console.info('init')
    this.zipcodeSubscription = this.zipcodeService.zipcodes$.subscribe((z: string[]) =>
    {
      //console.info(z);
      this.zipcodes = z;
    });
  }
}
