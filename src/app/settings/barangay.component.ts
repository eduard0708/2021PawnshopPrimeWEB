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
  barangayForm: FormGroup;
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
    this.barangayForm = this.fb.group({
      selectedCity:[Validators.required],
      barangayName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dropDownRef.focus();
    }, 100);
    this.primeConfig.ripple = true;
    this.loadCities();

    this.barangayForm.valueChanges.subscribe(() => {
      this.isAddCity = !this.barangayForm.valid;
    });
  }

  reset() {
    this.barangayForm.reset();
    this.dropDownRef.focus();
  }

  add() {
    if (this.barangayForm.controls.cityName.value !== null || '') {
      let addCity = {
        cityName: this.barangayForm.controls.cityName.value,
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
    this.barangayForm.controls.cityName.setValue('');
    this.barangayForm.reset();
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
