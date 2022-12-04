import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PretService {
  private baseUrl = 'http://localhost:8080/biblio/biblio/';
  constructor(private http: HttpClient) { }

  getPretList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'Pret-list');
  }
  getPretListall(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'Galaryp');
  }
  getPretbybook(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '');
  }

 createPret(pret: object ): Observable<object> {
    const headers = new HttpHeaders()
   .set('content-type', 'application/json');
    return this.http.post( `${this.baseUrl}` + 'Pret', pret );
  }
  // createPret(data): Observable<any> {
  // return this.http.post(`${this.baseUrl}` + 'save-Pret', data);}
  deletePret(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-Pret/${id}`, { responseType: 'text' });
  }
  getPret(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/Pret/${id}`);
  }

  updatePret(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-Pret/${id}`, value);
  }


}
