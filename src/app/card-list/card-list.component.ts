import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  constructor(private http: HttpClient) { 
    
  }
  
  cards: any = [];
  
  ngOnInit(): void {
    this.getAllCards();
  }
  
  getAllCards() {
    return this.http.get('https://api.magicthegathering.io/v1/cards')
    .subscribe((response: any) => {
      this.cards = response.cards;
      
      console.log(this.cards);
    })
  }

}
