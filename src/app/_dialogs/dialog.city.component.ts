import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { City } from '../_models/city';
import { AddressService } from '../_services/address.service';



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
  cityDataSource:City[]=[];
  first:number = 0;
  rows:number = 5;
  constructor(
   private fb:FormBuilder, private primeConfig:PrimeNGConfig, private addressService:AddressService
  ) { 
    this.cityForm = this.fb.group({
      cityName:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.addressService.getCities().subscribe(cities => {
      this.cityDataSource = cities;
    })
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

  next(){
    this.first = this.first + this.rows;
  }
  prev(){
    this.first = this.first - this.rows;
  }
  
  isLastPage():boolean{
    return this.cityDataSource ? this.first === (this.cityDataSource.length - this.rows): true;
  }
  isFirstPage():boolean{
    return this.cityDataSource ? this.first === 0: true;
  }

}
