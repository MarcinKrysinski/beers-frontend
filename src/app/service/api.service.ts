import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Beer} from '../model/beer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/beers-info';

  constructor(private http: HttpClient) { }

  getBeersInfo(): Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL);
  }
}
