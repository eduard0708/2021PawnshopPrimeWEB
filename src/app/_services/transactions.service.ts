import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getPawnerByContact(contactNumber:number){
    return this.http.get(this.url + `pawner/contact-number/${contactNumber }`);
  }

}

