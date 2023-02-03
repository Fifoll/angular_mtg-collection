import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  favouriteCards: any = [];

  constructor(private httpClient: HttpClient) { }

  private baseApiUrl = 'https://api.magicthegathering.io/v1';

  getAllCards(): Observable<any> {

    return this.httpClient.get(`${this.baseApiUrl}/cards`);

  }

  getContact(id: number): Observable<any> {

    return this.httpClient.get(`${this.baseApiUrl}/cards/${id}`);

  }
  
  public addToFavourite(card: any, cardName: string) {
    if(this.favouriteCards.includes(card)) {
      alert(`${cardName} już jest Twoją ulubioną kartą`)
    } else {
      this.favouriteCards.push(card);
      console.log(this.favouriteCards);
    }
  }


}
