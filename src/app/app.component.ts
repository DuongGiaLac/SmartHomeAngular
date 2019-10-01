import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailInfoComponent } from './detail-info/detail-info.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmartHomeAngular';

  constructor(public dialog: MatDialog, ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailInfoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
