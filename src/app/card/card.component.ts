import { Component, OnInit } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards:Card[] = [
    new Card(1,'Components','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',5,1),
    new Card(2,'Directives','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',7,3),
    new Card(3,'Pipes','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',12,5),
    new Card(4,'Modules','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',2,9),
    new Card(5,'Data-binding','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',9,4),
  ]

  toggleDetails(index){
    this.cards[index].showDescription = !this.cards[index].showDescription;
  }

  upVoteCard(index){
      var up=this.cards[index].upVote+1;
      this.cards[index].upVote=up;
  }

  downVoteCard(index){
      var down=this.cards[index].downVote-1;
      this.cards[index].downVote=down;
  }

  addNewCard(card){
    let cardLength = this.cards.length;
    card.id = cardLength+1;
    this.cards.push(card)
  }

  constructor() { }
  ngOnInit(): void {
  }

}

