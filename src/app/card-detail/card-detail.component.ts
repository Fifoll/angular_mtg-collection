import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardListService } from '../card-list.service';
import { CardListComponent } from '../card-list/card-list.component';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  activeTab: string = "Details";


  constructor(private cardListService: CardListService, private route: ActivatedRoute, private spinnerService: SpinnerService) { 
  }

  ngOnInit(): void {
    this.loadContact();
  }

  cardDetails: any = {};

  addToFavourite(card: any): void {
    console.log(card);
  }


  loadContact(): void {
    const id = this.route.snapshot.params['id'];
    this.spinnerService.requestStarted();

    this.cardListService.getContact(id).subscribe(data => {
      this.cardDetails = data.card;
      console.log(data.card);
      this.spinnerService.requestEnded();
    })
  }

  onTabClick(tab: string): void {
      this.activeTab = tab;
  }

  addToFavouriteFromProductPage(card: any, cardName: string):void {
    this.cardListService.addToFavourite(card, cardName);
  }

}
