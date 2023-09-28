import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HomeComponent {
  zipcodeSubscription = new Subscription();

  zipcodes: string[] = [];
  constructor(private zipcodeService: ZipcodeService) { }

  ngOnInit(): void {
    //console.info('init')
    this.zipcodeSubscription = this.zipcodeService.zipcodes$.subscribe((z: string[]) => {
      //console.info(z);
      this.zipcodes = z;
    });
  }
}
