import { ZipcodeService } from '../zipcode.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.css']
})
export class ZipcodeFormComponent implements OnInit {

  zipcodeForm = new UntypedFormGroup({ zipcode: new UntypedFormControl() })

  constructor(private zipcodeService: ZipcodeService) { }

  ngOnInit(): void {
  }

  handleForm() {
    var zipcode = this.zipcodeForm.value["zipcode"];
    this.zipcodeService.storeZipcode(zipcode);
  }
}
