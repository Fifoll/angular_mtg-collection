import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardListService } from '../card-list.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(private cardListService: CardListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadContact();
  }

  cardDetails: any = {};


  loadContact(): void {

    const id = this.route.snapshot.params['id'];

    this.cardListService.getContact(id).subscribe(data => {
      this.cardDetails = data.card;
      console.log(data.card);
    })



  }

}
