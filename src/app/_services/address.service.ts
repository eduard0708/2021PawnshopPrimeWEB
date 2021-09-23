import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddBarangay } from '../_models/addbarangay';
import { Barangay } from '../_models/barangay';
import { City } from '../_models/city';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  url = environment.baseUrl + 'address/';

  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get<City[]>(this.url + 'cities');
  }

  addCity(city: any) {
    return this.http.post<City>(this.url + 'add-city', city);
  }

  getBarangays() {
    return this.http.get<Barangay[]>(this.url + 'barangays');
  }

  addBarangay(barangay: AddBarangay) {
    return this.http.post(this.url + 'add-barangay', barangay);
  }

  getCitiesBarangays() {
    return this.http.get(this.url + 'city-barangay');
  }

}
