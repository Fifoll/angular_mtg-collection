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

  p:number = 1;
  itemsPerPage: number = 10;
  totalProduct:any;
  
  ngOnInit(): void {
    this.getAllCards();
  }
  
  getAllCards() {
    return this.http.get('https://api.magicthegathering.io/v1/cards')
    .subscribe((response: any) => {
      this.cards = response.cards; 
      this.totalProduct = response.length;
      console.log(this.cards);
    })
  }

}
