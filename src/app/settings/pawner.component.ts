import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AddAddress } from '../_models/addAddress';
import { AddPawner } from '../_models/addPawer';
import { Barangay } from '../_models/barangay';
import { City } from '../_models/city';
import { Pawner } from '../_models/Pawner';
import { AddressService } from '../_services/address.service';
import { PawnerService } from '../_services/pawner.service';

@Component({
  selector: 'app-pawner',
  templateUrl: './pawner.component.html',
  styleUrls: ['settings_sass/pawner.scss'],
  providers: [MessageService],
})
export class PawnerComponent implements OnInit {
  @ViewChild('firstNameRef') firstNameRef: ElementRef;
  pawnerForm: FormGroup;
  cities: City[] = [];
  barangays: Barangay[] = [];
  cityBarangay = [];
  isAdd: boolean = true;
  isQueryFromNewloan:boolean;
  constructor(
    private addressService: AddressService,
    private pawnerService: PawnerService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.pawnerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      city: [Validators.required],
      barangay: [Validators.required],
      completeAddress: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCityBarangay();
    //check if the query url is from newloan
    this.activatedRoute.queryParams.subscribe(query => {
          this.isQueryFromNewloan = query.newpanwer;
        if(this.isQueryFromNewloan) 
        setTimeout(() => {
          this.messageService.add({
            severity: 'warn',
            summary: 'No Pawner Exist!',
            detail: 'Create new Pawner...',
          });  
        }, 100);
    });
    
    this.pawnerForm.valueChanges.subscribe(() => {
      this.isAdd = !this.pawnerForm.valid;
    });
    setTimeout(() => {
      this.firstNameRef.nativeElement.focus();
    }, 100);
  }

  loadCityBarangay() {
    this.addressService.getCitiesBarangays().subscribe((citybrgy) => {
      this.cityBarangay = citybrgy as any;
      this.cities = citybrgy as any;
    });
  }

  selectedCity(city) {
    this.barangays = city.value.barangays;
  }

  save() {
    this.pawnerService
      .addPawner(this.convertPawner(this.pawnerForm.value))
      .subscribe((pawner) => {
        const newPawner:Pawner = pawner;
          this.messageService.add({
            severity: 'success',
            summary: 'New Pawner Added',
            detail: `${newPawner.firstName} ${newPawner.lastName}`
          });
      });
      this.pawnerForm.reset();
      this.firstNameRef.nativeElement.focus();
  }

  addCity() {
    console.log('me');
  }

  reset() {
    this.pawnerForm.reset();
    this.firstNameRef.nativeElement.focus();
  }
  
  home() {
    this.router.navigateByUrl('');
  }

  convertPawner(pawner) {
    const address: AddAddress = {
      isActive: true,
      cityName: pawner.city.cityName,
      barangayName: pawner.barangay.barangayName,
      completeAddress: pawner.completeAddress,
    };
    const telnumber = (pawner.contactNumber).replace(/\D/g,'');
    const newpawner: AddPawner = {
      firstName: pawner.firstName,
      lastName: pawner.lastName,
      contactNumber: telnumber,
      addresses: [address],
    };

    return newpawner;
  }
}
