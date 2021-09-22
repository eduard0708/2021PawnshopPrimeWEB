import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Barangay } from '../_models/barangay';
import { City } from '../_models/city';

@Component({
  selector: 'app-dialog-barangay',
  templateUrl: './dialog.barangay.component.html',
  styleUrls: ['../_sass/dialog.barangay.scss'
  ]
})
export class DialogBarangayComponent implements OnInit {
  @ViewChild('barangayRef') barangayRef:ElementRef
  @ViewChild('cityRef') cityRef

  barangayForm:FormGroup;
  cityName:string;
  cities:City[]=[
    {"cityId":1,"cityName":"Iloilo"},
    {"cityId":2,"cityName":"Passi"}
  ];
  barangayDataSource:Barangay[]=[
    {"barangayId":1,"barangayName":"Brgy. Iloilo"},
    {"barangayId":2,"barangayName":"Brgy. Passi"}
  ];
  constructor(
   private fb:FormBuilder, private primeConfig:PrimeNGConfig
  ) { 
    this.barangayForm = this.fb.group({
      selectedCity:['',Validators.required],
      barangayName:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    // this.cityForm.controls.cityName.valueChanges.subscribe()
  }
  reset(){
    this.barangayForm.controls.barangayName.setValue('');
    this.barangayForm.reset();
    this.cityRef.focus();
  }

  add(){
    this.barangayForm.controls.barangayName.setValue('');
    this.barangayForm.reset();
    this.cityRef.focus();
  }
}
