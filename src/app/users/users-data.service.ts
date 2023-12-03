import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../common/models/paginated-response.model';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private baseUrl = "http://localhost:8080/api/employee";

  constructor(private http: HttpClient) { }


  getEmployeeList(page: number = 0, size: number = 10): Observable<PaginatedResponse<Employee>> {
    const params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());

    return this.http.get<PaginatedResponse<Employee>>(this.baseUrl, { params });
}

  getEmployeeCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`)
  }
}
