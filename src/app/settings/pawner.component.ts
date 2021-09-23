import { Component, OnInit } from '@angular/core';
import { City } from '../_models/city';
import { AddressService } from '../_services/address.service';

@Component({
  selector: 'app-pawner',
  templateUrl: './pawner.component.html',
  styleUrls: ['settings_sass/pawner.scss'],
})
export class PawnerComponent implements OnInit {

  cities:City[]=[];
  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    this.addressService.getCities().subscribe((cities) => {
      this.cities = [... cities];
    });
  }

  save(){
    
  }
  reset(){

  }

}
