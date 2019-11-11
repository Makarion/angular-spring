import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';

@Injectable()
export class EquipmentService {

  private equipmentUrl: string;

  constructor(private http: HttpClient) {
      this.equipmentUrl = 'http://localhost:8080/equipment/equipmentList';
  }

  public findAll(): Observable<Equipment[]> {
    let token=sessionStorage.getItem("token");
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.http.get<Equipment[]>(this.equipmentUrl, {headers});
  }
}
