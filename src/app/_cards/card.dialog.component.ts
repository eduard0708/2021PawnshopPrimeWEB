import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card.dialog.component.html',
  styleUrls: ['../_sass/cards.scss'],
})
export class CardDialogComponent implements OnInit, OnDestroy {
  @Input() transInfo;
  @ViewChild('telOrTrsansNumberRef') telOrTrsansNumberRef: ElementRef;
  transactionType: string;
  isActive: boolean = true;
  cardForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogData: DynamicDialogConfig,
    public dialogRef: DynamicDialogRef
  ) {
    this.cardForm = this.fb.group({
      telOrTrsansNumber: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    //take the data from the dashboard thru configuration of dynamicDialogConfig
    this.transactionType = this.dialogData.data.transactionType
      .replace(/\s/g, '')
      .toLowerCase();

    setTimeout(() => {
      this.telOrTrsansNumberRef.nativeElement.focus();
    }, 100);
    this.cardForm.valueChanges.subscribe(() => {
      this.isActive = !this.cardForm.valid;
    });
  }

  submit() {
    console.log();
    this.router.navigateByUrl('/transactions/' + `${this.transactionType}`, {
      state: this.cardForm.controls.telOrTrsansNumber.value
    });

    this.dialogRef.close();
  }
  reset() {
    this.cardForm.reset();
    this.telOrTrsansNumberRef.nativeElement.focus();
  }
  cancel() {}

  ngOnDestroy(): void {
    if (this.dialogRef) this.dialogRef.close();
  }
}
