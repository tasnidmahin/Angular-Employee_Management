import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private baseUrl = "http://localhost:8080/api/employee";

  constructor(private http: HttpClient) { }

  getEmployeeCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`)
  }
}
