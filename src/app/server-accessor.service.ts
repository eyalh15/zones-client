import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from './interfaces/zone.interface';
import { ConfigService } from './config.service'; // Import the configuration service


@Injectable({
  providedIn: 'root'
})
export class ServerAccessorService {
  private apiUrl: string;
  
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.apiUrl = this.configService.getApiUrl(); // Use configuration service
   }

  // Fetch all zones from the server
  fetchZones(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.apiUrl);
  }

  // Create a new zone
  createZone(name: string, polygonPoints: [number, number][]): Observable<Zone> {
    const newZone = { name, points: polygonPoints };
    return this.http.post<Zone>(`${this.apiUrl}/create/`, newZone);
  }

  // Delete a zone by its ID
  deleteZone(zoneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${zoneId}`);
  }
}
