import { Component, OnInit } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards:Card[] = [
    new Card(1,'Components','Angular puts everything in the user interface into self-contained components. A component controls one or more sections on the screen called a view.',5,1),
    new Card(2,'Directives','Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives.There are two kinds of directives: structural and attribute directives',7,3),
    new Card(3,'Pipes','In Angular, a pipe takes in data as input and transforms it into the desired output. ',12,5),
    new Card(4,'Modules','Angular applications follow a modular structure. An angular app will have one or more modules, each dedicated to a single purpose. Typically, a module would contain all the code needed for one piece of functionality in your application.',9,5),
    new Card(5,'Data-binding','Angular supports data binding, a mechanism for coordinating parts of a template with parts of a component. We add binding markup to the Angular supports data binding, a mechanism for coordinating parts of a template with parts of a component.',9,4),
  ]

  toggleDetails(index){
    this.cards[index].showDescription = !this.cards[index].showDescription;
  }

  upVoteCard(index){
      var up=this.cards[index].upVote+1;
      this.cards[index].upVote=up;
  }

  downVoteCard(index){
      var down=this.cards[index].downVote+1;
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

