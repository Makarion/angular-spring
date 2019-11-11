import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';

@Injectable()
export class EquipmentService {

  private equipmentUrl: string;

  constructor(private http: HttpClient) {
    this.equipmentUrl = 'http://localhost:8080/equipment';
  }

  public findAll(): Observable<Equipment[]> {
    let username='root';
    let password='root';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.http.get<Equipment[]>(this.equipmentUrl, {headers});
  }
}
