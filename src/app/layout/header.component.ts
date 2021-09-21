import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../_sass/layout.scss']
})
export class HeaderComponent implements OnInit {
  visible
  constructor() { }

  ngOnInit(): void {
  }

}
