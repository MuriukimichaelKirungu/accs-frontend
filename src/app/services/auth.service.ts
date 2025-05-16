import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes it available app-wide
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth'; // Adjust this as needed

  constructor(private http: HttpClient) {}

  // Register user with email, password, and member number
  register(user: { email: string; password: string; memberNumber: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Login user with email and password
  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
