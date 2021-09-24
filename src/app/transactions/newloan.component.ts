import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  styleUrls:['transactions_sass/newloan.scss'],
  providers: [MessageService],
})
export class NewloanComponent implements OnInit {
  listPawner = [];
  value9=1000312.20
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private transactionsService: TransactionsService,
    private messageService: MessageService
  ) {
    if(this.router.getCurrentNavigation().extras.state){
      const newPawner = this.router.getCurrentNavigation().extras.state.pawner as any
      console.log(newPawner);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      //check if the query string is undefine of not
      if(Object.keys(data).length > 0){
       this.transactionsService
        .getPawnerByContact(data.search)
        .subscribe((data) => {
          this.listPawner = [...(data as any)];
          if (this.listPawner.length == 0) {
            this.router.navigate(['/settings/pawner'], {
              queryParams: { newpanwer: true },
            });
          }
        });
      }
    });
  
  }
}
