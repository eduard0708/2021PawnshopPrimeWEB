import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { City } from '../_models/city';
import { AddressService } from '../_services/address.service';

@Component({
  selector: 'app-barangay',
  templateUrl: './barangay.component.html',
  styleUrls: ['settings_sass/barangay.scss'],
  providers: [MessageService],
})
export class BarangayComponent implements OnInit {
  @ViewChild('dropDownRef') dropDownRef;
  cityForm: FormGroup;
  cityName: string;
  cityDataSource: City[] = [];
  isAddCity: boolean = true;
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private primeConfig: PrimeNGConfig,
    private addressService: AddressService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.cityForm = this.fb.group({
      cityName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dropDownRef.focus();
    }, 100);
    this.primeConfig.ripple = true;
    this.loadCities();

    this.cityForm.controls.cityName.valueChanges.subscribe(() => {
      this.isAddCity = !this.cityForm.valid;
    });
  }

  reset() {
    this.cityForm.controls.cityName.setValue('');
    this.cityForm.reset();
    this.dropDownRef.focus();
  }

  add() {
    if (this.cityForm.controls.cityName.value !== null || '') {
      let addCity = {
        cityName: this.cityForm.controls.cityName.value,
      };
      this.addressService.addCity(addCity).subscribe((city) => {
        const newCity: City = city as City;
        if (newCity)
          this.messageService.add({
            severity: 'success',
            summary: 'New City Added',
            detail: `City Name: ${newCity.cityName}`,
          });
      });
    }
    this.cityForm.controls.cityName.setValue('');
    this.cityForm.reset();
    this.dropDownRef.focus();
    this.cityDataSource = [];
    this.loadCities();
  }

  loadCities() {
    this.addressService.getCities().subscribe((cities) => {
      this.cityDataSource = [... cities];
    });
  }

  home() {
    this.cityDataSource = [];
    this.router.navigateByUrl('');
  }

}
