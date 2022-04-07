import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() card: Card
  @Output() isComplete = new EventEmitter<boolean>();

  upVote(complete:boolean){
    this.isComplete.emit(complete);
  }

  downVote(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }
  ngOnInit(): void {
  }

}
