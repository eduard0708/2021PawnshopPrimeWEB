import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCityComponent } from '../_dialogs/dialog.city.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../_sass/layout.scss'],
  providers:[DialogService]

})
export class FooterComponent implements OnInit, OnDestroy {

  settingItems: MenuItem[];
  cityDialogRef:DynamicDialogRef;

  constructor(public dialogService:DialogService) { }

  ngOnInit(): void {
    this.settingItems = [
      {
        tooltipOptions: {
          tooltipLabel: "Newloan",
          tooltipPosition:"left"
      },
        icon: 'pi pi-pencil',
        command: () => {
          // this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          this.showCity();
        }
      },
      {
        icon: 'pi pi-refresh',
        tooltipOptions: {
          tooltipLabel: "Redeem",
          tooltipPosition:"left"
      },
        command: () => {
          // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        },
        tooltip: "Add Cityasdfasdfasdf"
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          // this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        },
        tooltip: "Add Cityasdfasdfasdf"
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
        tooltip: "Add Cityasdfasdfasdf"
      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
        tooltip: "Add Cityasdfasdfasdf"

      }
    ]
  }

  showCity(){
    this.cityDialogRef = this.dialogService.open(DialogCityComponent,{
      header: 'Add New City',
      width: 'auto',
      contentStyle: {"max-height": "500px", "overflow": "auto", "width":"100%"},
      style:{"margin-top":"-30rem"},
      baseZIndex: 10000,   
    } )
  }

  ngOnDestroy(): void {
    if(this.cityDialogRef)
      this.cityDialogRef.close();
    
  }

}
