import { Component, OnInit } from '@angular/core';
import { DialogPawnerComponent } from '../_dialogs/dialog.pawner.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../_sass/dashboard.scss'
  ]
})
export class DashboardComponent implements OnInit {

  cardData=[];
  constructor() { }

  ngOnInit(): void {
    this.cardData =[
      {
        name:"New Loan",
        amount:50500,
        count:55
      },
      {
        name:"Renew",
        amount:70500,
        count:53
      },
      {
        name:"Redeem",
        amount:80500,
        count:45
      },
      {
        name:"Partial",
        amount:60300,
        count:68
      },
      {
        name:"Additional",
        amount:50500,
        count:55
      },  
    ]
  }

}
