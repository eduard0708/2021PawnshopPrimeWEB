import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../_models/city';



@Component({
  selector: 'app-dialog-city',
  templateUrl: './dialog.city.component.html',
  styleUrls: ['../_sass/dialog.city.scss'
  ]
})
export class DialogCityComponent implements OnInit {
  @ViewChild('cityRef') cityRef:ElementRef
  cityForm:FormGroup;
  cityName:string;
  cityDataSource:City[]=[
    {"cityId":1,"cityName":"Iloilo"},
    {"cityId":2,"cityName":"Passi"}
  ];
  constructor(
   private fb:FormBuilder
  ) { 
    this.cityForm = this.fb.group({
      cityName:['', Validators.required]
    })
  }

  ngOnInit(): void {
    
    // this.cityForm.controls.cityName.valueChanges.subscribe()
  }
  reset(){
    this.cityForm.controls.cityName.setValue('');
    this.cityForm.reset();
    this.cityRef.nativeElement.focus();
  }

  add(){
    this.cityForm.controls.cityName.setValue('');
    this.cityForm.reset();
    this.cityRef.nativeElement.focus();
  }


}
