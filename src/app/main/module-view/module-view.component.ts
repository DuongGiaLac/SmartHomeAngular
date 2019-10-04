import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailInfoComponent } from '../../detail-info/detail-info.component';
@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  name = 'Living Room';
  temperature = '18';
  humidity = '???';

  constructor(public dialog: MatDialog, ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailInfoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
  }

}
