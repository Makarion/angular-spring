import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from '../model/equipment';
import { Observable } from 'rxjs';
import {TokenService} from "./token.service";

@Injectable()
export class EquipmentService {

  private equipmentUrl: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
      this.equipmentUrl = 'http://localhost:8080/equipment/equipmentList';
  }

  public findAll(): Observable<Equipment[]> {
    const headers = this.tokenService.validateToken(sessionStorage);

    return this.http.get<Equipment[]>(this.equipmentUrl, {headers});
  }
}
