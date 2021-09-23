import { Component,  OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AddBarangay } from '../_models/addbarangay';
import { City } from '../_models/city';
import { Barangay } from '../_models/barangay';
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
  barangayDataSource: Barangay[] = [];
  cityDataSource: City[] = [];
  isAddCity: boolean = true;

  constructor(
    private fb: FormBuilder,
    private primeConfig: PrimeNGConfig,
    private addressService: AddressService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.barangayForm = this.fb.group({
      selectedCity: [Validators.required],
      barangayName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dropDownRef.focus();
    }, 100);
    this.primeConfig.ripple = true;
    this.loadCities();
    this.loadBaragays();

    this.barangayForm.valueChanges.subscribe(() => {
      this.isAddCity = !this.barangayForm.valid;
    });
  }

  reset() {
    this.barangayForm.reset();
    this.dropDownRef.focus();
  }

  add() {
    if (this.barangayForm.controls.barangayName.value !== '' && !null) {
      let brgy = this.barangayForm.value;
      let newBrgy: AddBarangay = {
        cityId: +brgy.selectedCity.cityId,
        barangayName: brgy.barangayName,
      };

      this.addressService.addBarangay(newBrgy).subscribe((barangay) => {
        const newBarangay: Barangay = barangay as Barangay;
        if (newBarangay){
          this.messageService.add({
            severity: 'success',
            summary: 'New Barangay Added',
            detail: `Barangay Name: ${newBarangay.barangayName}`,
          });
          this.barangayDataSource.push(newBarangay);
        }
         
      });
    }
    this.barangayForm.reset();
    this.dropDownRef.focus();
    this.loadCities();
  }

  loadCities() {
    this.addressService.getCities().subscribe((cities) => {
      this.cityDataSource = [...cities];
    });
  }
  loadBaragays(){
    this.addressService.getBarangays().subscribe(barangays =>{
      this.barangayDataSource = barangays as any;
    })
  }

  home() {
    this.cityDataSource = [];
    this.router.navigateByUrl('');
  }
}
