import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://your-server-url/api'; // Replace with your server URL

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    const userData = { username, password };
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
