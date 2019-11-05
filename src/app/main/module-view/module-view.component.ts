import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailInfoComponent } from '../../detail-info/detail-info.component';
import { ChartsComponent } from '../../charts/charts.component';
import { Module } from '../../../models/Module';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
})
export class ModuleViewComponent implements OnInit {
  @Input()
  public room: Module;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {

    // const dialogRef = this.dialog.open(DetailInfoComponent, {
    //   data: { room: this.room },
    // });
    const dialogRef_chart = this.dialog.open(ChartsComponent, {
      data: { room: this.room },
    });
    // dialogRef.afterClosed().subscribe(result => {
    // });
    dialogRef_chart.afterClosed().subscribe(result => {
    });
  }

}
