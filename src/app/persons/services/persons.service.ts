import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_ENDPOINT = ' https://api.github.com/users';
@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any> {
    const uri = `${API_ENDPOINT}`;
    return this.http.get<any>(uri).pipe(
      map(persons => {
        return (persons || []).slice(0, 5);
      }));
  }

  getPersonDetails(personId: any): Observable<any> {
    const uri = `${API_ENDPOINT}/${personId}`;
    return this.http.get<any>(uri);
  }
}
