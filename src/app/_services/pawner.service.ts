import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddPawner } from '../_models/addPawer';
import { Pawner } from '../_models/Pawner';

@Injectable({
  providedIn: 'root',
})
export class PawnerService {
  url:string = environment.baseUrl + 'pawner/';

  constructor(private http: HttpClient) {}

  addPawner(pawner: AddPawner) {
    return this.http.post<Pawner>(this.url + 'add-pawner', pawner);
  }
}
