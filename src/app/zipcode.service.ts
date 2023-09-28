import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  constructor() {
    this.updateZipcodes();
  }

  private zipcodes = new BehaviorSubject<string[]>([]);
  public zipcodes$ = this.zipcodes.asObservable();

  storeZipcode(zipcode: string) {
    //console.info('store')
    var existingStorage = localStorage.getItem('zipcodes');
    if (existingStorage == null) {
      localStorage.setItem('zipcodes', JSON.stringify([zipcode]));
      existingStorage = JSON.stringify([zipcode]);
      this.updateZipcodes();
      return;
    }

    try {
      var existingZipcodes = JSON.parse(existingStorage);
      //console.info(`existing zipcodes ${existingZipcodes}`);
      if (typeof (existingZipcodes) == typeof ([])) {
        existingZipcodes.push(zipcode);
        //console.info(existingZipcodes);
        localStorage.setItem('zipcodes', JSON.stringify(existingZipcodes));
        this.updateZipcodes();

      }
    }
    catch (e) {
      console.error(`Failed to save zipcode: ${e}`)
    }
  }

  updateZipcodes() {
    var existingStorage = localStorage.getItem('zipcodes');
    if (existingStorage == null) {
      this.zipcodes.next([]);
      //throw new Error("No zipcodes");
      return;
    }
    this.zipcodes.next(JSON.parse(existingStorage));
    //console.info(existingStorage);
  }

  deleteZipcode(zipcode: string)
  {
    console.info('delete');
    var updatedZipcodes = this.zipcodes.value.filter(z => z !== zipcode);
    localStorage.setItem('zipcodes', JSON.stringify(updatedZipcodes));
    this.zipcodes.next(updatedZipcodes);
  }
}
