import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popupDemo';
  @ViewChild('bottom', { static: true }) bottomEl: ElementRef;
  public listItems: Array<string> = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];


  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "600px",
      height: "250px"
    });
  }

  scrollDown() {
    (this.bottomEl.nativeElement as HTMLElement).scrollIntoView();
  }
}
