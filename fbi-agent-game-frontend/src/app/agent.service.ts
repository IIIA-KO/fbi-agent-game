import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'http://localhost:4308/agent';

  constructor(private http: HttpClient) { }

  getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }

  performAction(action: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/action`, { action });
  }

  resetGame(): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset`, {});
  }
}
