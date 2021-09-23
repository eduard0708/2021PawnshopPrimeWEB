import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CardDialogComponent } from '../_cards/card.dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../_sass/dashboard.scss'],
  providers: [DialogService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  cardData = [];
  transactionCardRef: DynamicDialogRef;
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.cardData = [
      {
        name: 'New Loan',
        amount: 50500,
        count: 55,
      },
      {
        name: 'Renew',
        amount: 70500,
        count: 53,
      },
      {
        name: 'Redeem',
        amount: 80500,
        count: 45,
      },
      {
        name: 'Partial',
        amount: 60300,
        count: 68,
      },
      {
        name: 'Additional',
        amount: 50500,
        count: 55,
      },
    ];
  }
  showCardTransaction(transName: string) {
    this.transactionCardRef = this.dialogService.open(CardDialogComponent, {
      header: transName,
      width: 'auto',
      height: '180px',
      contentStyle: {
        'max-height': '500px',
        overflow: 'auto',
        width: '100%',
      },
      data:{
        transactionType:transName
      },
      closeOnEscape: true,
      style: { 'margin-top': '-20rem' },
      baseZIndex: 10000,
    });
  }

  ngOnDestroy() {
    if (this.transactionCardRef) this.transactionCardRef.close();
  }
}
