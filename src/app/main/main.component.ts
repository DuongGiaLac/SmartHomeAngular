import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {RealtimeDBService} from '../../services/firebase/realtime-db.service';
import {MatDialog} from '@angular/material/dialog';
import {ConnectDialogComponent} from '../connect-dialog/connect-dialog.component';

@Component({
  selector: 'app-main',
  template: `
      <mat-tab-group [selectedIndex]="selected.value" (selectedIndexChange)="selected.setValue($event)"
                     style="background-color: #e5e5e5 ; height: 100%">
          <mat-tab *ngFor="let tab of realtimeDB.homes" [label]="tab.name">
              <div id="wrapper" style="max-width: 1000px; margin: 10px auto; padding: 0 20px">
                  <button mat-raised-button color="primary" (click)="openConnectDialog(tab.name)">Connect new module</button>
                  <app-module-view *ngFor="let room of tab.modules" [room]="room"></app-module-view>
              </div>
          </mat-tab>
      </mat-tab-group>
  `,
})
export class MainComponent implements OnInit {
  selected = new FormControl(0);

  constructor(private firebase: AngularFireDatabase, private realtimeDB: RealtimeDBService, public dialog: MatDialog) {
    this.realtimeDB = new RealtimeDBService(this.firebase);
  }

  ngOnInit() {
  }

  openConnectDialog(home: string): void {
    this.dialog.open(ConnectDialogComponent, {
      data: {home}
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

// createHome(selectAfterAdding: boolean) {
//   this.tabs.push('New');

//   if (selectAfterAdding) {
//     this.selected.setValue(this.tabs.length - 1);
//   }
// }

// removeHome(index: number) {
//   this.tabs.splice(index, 1);
// }
}
