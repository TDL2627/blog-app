import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //Node express api

  api : string = 'https://techexpress-server.herokuapp.com/users';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get all admin users

  GetUsers() {
    return this.httpClient.get(`${this.api}`);
  }



}
