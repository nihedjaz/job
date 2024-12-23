import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstFormGroup: FormGroup;
 secondFormGroup: FormGroup;
 thirdFormGroup3: FormGroup;
 isLinear=true;


  // clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.firstFormGroup = this.fb.group({
      groupName: ['', Validators.required],
      currency: ['', Validators.required],
      bankName: ['', Validators.required],
      rib: ['', Validators.required],
      bank: ['', Validators.required],
      bic: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressLine3: [''],
    });
    this.secondFormGroup = this.fb.group({
      groupName: ['', Validators.required],
      currency: ['', Validators.required],
      bankName: ['', Validators.required],
      rib: ['', Validators.required],
      companyName: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressLine3: [''],
    });
    this.thirdFormGroup3 = this.fb.group({
      percentage: [null, Validators.required]
    });
  }

  // onSubmit() {
  //   console.log('Données soumises :', this.clientForm.value);
  // }
}