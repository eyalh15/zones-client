import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://localhost:8000/api/zones'; // Directly specify the API URL

  getApiUrl(): string {
    return this.apiUrl;
  }
}
