import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';
import {TokenService} from "./token.service";

@Injectable()
export class EquipmentDetailsService {

  private equipmentDetailsUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.equipmentDetailsUrl = 'http://localhost:8080/equipment/equipmentDetails/';
  }

  public findOne(id: string): Observable<Equipment> {
    const headers = this.tokenService.validateToken(sessionStorage);

    return this.http.get<Equipment>(this.equipmentDetailsUrl + id, {headers});
  }

  public save(id: string, equipment: Equipment) {
    const headers = this.tokenService.validateToken(sessionStorage);

    return this.http.post<Equipment>(this.equipmentDetailsUrl + id, equipment, {headers});
  }
}
