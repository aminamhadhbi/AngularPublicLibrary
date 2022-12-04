import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private baseUrl = 'http://localhost:8080/biblio/biblio/';

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'Book-list');
  }
  getBookListall(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'Galary');
  }


  createBook(book: object ): Observable<object> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');
     return this.http.post( `${this.baseUrl}` + 'add-book', book );
  }
  // createBook(data): Observable<any> {
    // return this.http.post(`${this.baseUrl}` + 'save-Book', data);}
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-Book/${id}`, { responseType: 'text' });
  }

  getBook(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/Book/${id}`);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-Book/${id}`, value);
  }
  }
