import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card.menu.component.html',
  styleUrls: ['../_sass/cards.scss']
})
export class CardMenuComponent implements OnInit {
  @Input() cardData;
  @Output() onTransaction:EventEmitter<string> = new EventEmitter() ;

  constructor() { }
  ngOnInit(): void {

  }
  newTransaction(transName:string){
    this.onTransaction.emit(transName)
  }

}
