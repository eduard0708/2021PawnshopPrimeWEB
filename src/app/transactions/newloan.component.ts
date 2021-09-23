import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  providers: [MessageService],
})
export class NewloanComponent implements OnInit {
  pawner = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private transactionsService: TransactionsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.transactionsService
        .getPawnerByContact(data.search)
        .subscribe((data) => {
          this.pawner = [...(data as any)];
          if (this.pawner.length == 0) {
            this.router.navigate(['/settings/pawner'], {
              queryParams: { newpanwer: true },
            });
          }
        });
    });
  }
}
