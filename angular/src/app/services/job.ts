import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceJob {

  private apiurl = 'http://localhost:5207/api/job';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }

  getJob(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${id}`);
  }

  createJob(job: any): Observable<any> {
    return this.http.post<any>(this.apiurl, job);
  }

  updateJob(id: number, job: any): Observable<any> {
    return this.http.put<any>(`${this.apiurl}/${id}`, job);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}/${id}`);
  }
}