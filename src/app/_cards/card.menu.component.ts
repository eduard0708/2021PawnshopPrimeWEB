import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card.menu.component.html',
  styleUrls: ['../_sass/cardmenu.scss']
})
export class CardMenuComponent implements OnInit {
  @Input() cardData;

  constructor() { }
  ngOnInit(): void {

  }

}
