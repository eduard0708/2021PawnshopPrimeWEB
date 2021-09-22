import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogBarangayComponent } from '../_dialogs/dialog.barangay.component';
import { DialogCityComponent } from '../_dialogs/dialog.city.component';
import { DialogPawnerComponent } from '../_dialogs/dialog.pawner.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../_sass/layout.scss'],
  providers: [DialogService]

})
export class FooterComponent implements OnInit, OnDestroy {

  settingItems: MenuItem[];
  cityDialogRef: DynamicDialogRef;
  barangayDialogRef: DynamicDialogRef;
  pawnerDialogRef: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    this.settingItems = [
      {
        tooltipOptions: {
          tooltipLabel: "City",
          tooltipPosition: "left"
        },
        icon: 'pi pi-pencil',
        routerLink:'/setting/city',
        command: () => {
          // this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        tooltipOptions: {
          tooltipLabel: "Barangay",
          tooltipPosition: "left"
        },
        routerLink:'/setting/barangay',
        command: () => {
          // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
     
        }

      },
      {
        icon: 'pi pi-trash',
        command: () => {
          // this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          this.showPawner();
        },
        tooltipOptions: {
          tooltipLabel: "Pawner",
          tooltipPosition: "left"
        },
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

  showCity() {
    this.cityDialogRef = this.dialogService.open(DialogCityComponent, {
      header: 'Add New City',
      width: 'auto',
      // contentStyle: { "max-height": "500px", "overflow": "auto", "width": "100%" },
      // style: { "margin-top": "-10rem" },
      baseZIndex: 10000,
    })
  }

  showBarangay() {
    this.cityDialogRef = this.dialogService.open(DialogBarangayComponent, {
      header: 'Barangay',
      width: 'auto',
      contentStyle: { "max-height": "500px", "overflow": "auto", "width": "100%" },
      style: { "margin-top": "-10rem" },
      baseZIndex: 10000,
    })
  }
  showPawner() {
    this.cityDialogRef = this.dialogService.open(DialogPawnerComponent, {
      header: 'Pawner',
      width: '50%',
      // contentStyle: { "max-height": "500px", "overflow": "auto", "width": "100%" },
      style: { "margin-top": "-10rem" },
      baseZIndex: 10000,
    })
  }

  ngOnDestroy(): void {
    if (this.cityDialogRef)
      this.cityDialogRef.close();

    if (this.barangayDialogRef)
      this.barangayDialogRef.close();
      
    if (this.pawnerDialogRef)
      this.pawnerDialogRef.close();

  }

}
