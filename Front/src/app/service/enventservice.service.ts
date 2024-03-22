import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { ServiceTor } from '../Models/Events';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnventserviceService {

  constructor(private http:HttpClient) { }

  getToristiqueServ(){
    return this.http.get<ServiceTor[]>(`http://localhost:3001/api/services`)
  }

  createToristiqueSer(service:ServiceTor) {
    return this.http.post<ServiceTor>(`http://localhost:3001/api/services`,service);

  }
  updateEvent(service:ServiceTor,_id:number ): Observable<ServiceTor>{
    return this.http.put<ServiceTor>(`http://localhost:3001/api/services`+_id,service)
  }
  deleteEvent(_id:string): Observable<any>{
    return this.http.delete(`http://localhost:3001/api/services`+_id)
  }
}
