import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../_models/city';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  url=environment.baseUrl + 'address/';

  constructor(private http:HttpClient) { }

  getCities(){
    return this.http.get<City[]>(this.url +'cities');
  }

  addCity(city:any){
    return this.http.post(this.url + 'add-city', city);
  }
}
