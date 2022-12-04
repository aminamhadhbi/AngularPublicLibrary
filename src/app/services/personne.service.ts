import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseUrl = 'http://localhost:8080/biblio/biblio/';

  constructor(private http: HttpClient) { }

  getPersonneList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'Personne');
  }

  //createBook(book: object): Observable<object> {
  //  return this.http.post(`${this.baseUrl}` + 'save-Book', book);
  // }
  createPersonne(data): Observable<any> {
    return this.http.post(`${this.baseUrl}` + 'save-Personne', data); }
  deletePersonne(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-Personne/${id}`, {responseType: 'text'});
  }
  getPersonne(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/Personne/${id}`);
  }

  updatePersonne(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-Personne/${id}`, value);
  }
}
