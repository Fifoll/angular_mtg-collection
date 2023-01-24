import { Component, OnInit } from '@angular/core';
import { CardListService } from '../card-list.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  constructor(private cardListService: CardListService) { 
    
  }
  
  cards: any = [];

  p:number = 1;
  itemsPerPage: number = 12;
  totalProduct:any;
  
  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.cardListService.getAllCards().subscribe((data: any) => {

      for(let i=0; i<data.cards.length; i++) {

        if(data.cards[i].hasOwnProperty("imageUrl")) {
          this.cards.push(data.cards[i]);
        };
        
      };
      this.totalProduct = this.cards.length;
      console.log(this.cards);

    })
  }

}
