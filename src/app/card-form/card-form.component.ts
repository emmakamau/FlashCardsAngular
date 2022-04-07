import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @Output() addCard = new EventEmitter<Card>();
  newCard = new Card(0,"","",0,0);

  submitCard(){
    this.addCard.emit(this.newCard);
      }

  constructor() { }
  ngOnInit(): void {
  }

}
