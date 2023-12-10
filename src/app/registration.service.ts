import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public LoginUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8000/login",user)

  }

  public RegisterUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8000/register",user)

  }
}
