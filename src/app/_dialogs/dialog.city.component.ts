import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-city',
  templateUrl: './dialog.city.component.html',
  styleUrls: ['../_sass/dialog.city.scss'
  ]
})
export class DialogCityComponent implements OnInit {
  cityForm:FormGroup;
  cityName:string;
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
   
    console.log('reset');
    console.log(this.cityForm.status);
    this.cityForm.reset();
    
    
  }


}
