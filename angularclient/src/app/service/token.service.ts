import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TokenService {
  constructor() {
  }

  public validateToken(sessionStorage){

    let token;
    if(sessionStorage.getItem("token") != null) {
      token = sessionStorage.getItem("token")
    }else{
      token = "";
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
  }
}



