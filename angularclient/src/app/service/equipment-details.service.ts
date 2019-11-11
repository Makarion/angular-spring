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
    let username='root';
    let password='root';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.http.get<Equipment>(this.equipmentDetailsUrl + id, {headers});
  }

  public save(id: string, equipment: Equipment) {
    let username='root';
    let password='root';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.http.post<Equipment>(this.equipmentDetailsUrl + id, equipment, {headers});
  }
}
