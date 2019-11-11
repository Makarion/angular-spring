import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';

@Injectable()
export class EquipmentDetailsService {

  private equipmentDetailsUrl: string;

  constructor(private http: HttpClient) {
    this.equipmentDetailsUrl = 'http://localhost:8080/equipment/equipmentDetails/';
  }

  public findOne(id: string): Observable<Equipment> {
    let token =sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.http.get<Equipment>(this.equipmentDetailsUrl + id, {headers});
  }

  public save(id: string, equipment: Equipment) {
    let token =sessionStorage.getItem("token");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.http.post<Equipment>(this.equipmentDetailsUrl + id, equipment, {headers});
  }
}
