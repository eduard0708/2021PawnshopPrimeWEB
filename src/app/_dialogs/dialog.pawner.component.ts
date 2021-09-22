import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../_models/city';

@Component({
  selector: 'app-dialog-pawner',
  templateUrl: './dialog.pawner.component.html',
  styleUrls: ['../_sass/dialog.pawner.scss'
]
})
export class DialogPawnerComponent implements OnInit {

  pawnerForm:FormGroup;
  @ViewChild('firstNameRef') firstNameRef:ElementRef
  cities:City[]=[
    {"cityId":1,"cityName":"Iloilo"},
    {"cityId":2,"cityName":"Passi"}
  ];
  constructor( private fb: FormBuilder) {
      this.pawnerForm = this.fb.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        contactNumber:['', Validators.required],
        selectedCity:['', Validators.required],
        completeAddress:['', Validators.required],
      })
   }

  ngOnInit(): void {
  }

  save(){

  }
  reset(){
    this.pawnerForm.reset();
    this.firstNameRef.nativeElement.focus();
  }

}
