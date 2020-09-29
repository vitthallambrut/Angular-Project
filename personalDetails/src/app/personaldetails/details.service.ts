import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private ROOT_URL = "http://localhost:4000/api/details";
  constructor(private http: HttpClient) { }

  pdetails(details){
    return this.http.post<any>(`${this.ROOT_URL}`,details);
  }

  
}
