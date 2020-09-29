import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../model/details';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private ROOT_URL = "http://localhost:4000/api/details";
  constructor(private http : HttpClient) { }

  getdetails(){
    return this.http.get<Details>(`${this.ROOT_URL}`);
  }
}

