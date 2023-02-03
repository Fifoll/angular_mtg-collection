import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private httpClient: HttpClient) { }

  private baseApiUrl = 'https://api.magicthegathering.io/v1';

  getAllCards(): Observable<any> {

    return this.httpClient.get(`${this.baseApiUrl}/cards`);

  }

  getContact(id: number): Observable<any> {

    return this.httpClient.get(`${this.baseApiUrl}/cards/${id}`);

  }
  




}
