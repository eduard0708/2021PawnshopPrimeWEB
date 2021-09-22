import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../_sass/layout.scss']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  items: MenuItem[];

  constructor(private primeConfig:PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.items = [
      {
        label: 'Newloan',
        icon: 'pi pi-fw pi-user',
        url:'/transactions/newloan'
      },
      {
        label: 'Redem',
        icon: 'pi pi-fw pi-user',
        url:'/transactions/redeem'
      },
      {
        label: 'Partial',
        icon: 'pi pi-fw pi-user',
        url:'/transactions/partial',
      },
      {
        label: 'Additional',
        icon: 'pi pi-fw pi-user',
        url:'/transactions/additional',
      },
      {
        label: 'Renew',
        icon: 'pi pi-fw pi-user',
        url:'/transactions/renew',
      },
    
    ]

   
  }

}
