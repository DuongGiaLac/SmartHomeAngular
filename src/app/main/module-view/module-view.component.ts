import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../../models/Enums';
import {AngularFireDatabase} from '@angular/fire/database';
import {MatDialog} from '@angular/material/dialog';
import {DetailInfoComponent} from '../../detail-info/detail-info.component';
import {Module} from '../../../models/Module';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
})
export class ModuleViewComponent implements OnInit {
  @Input()
  public room: Module;
  private _TEMP_HUMID = '';
  set temp_humid(value: string) {
    if (value === '') {
      this.temperature = 0;
      this.humidity = 0;
    } else {
      const data = value.split(' ');
      this.temperature = parseFloat(data[0]);
      this.humidity = parseFloat(data[1]);
    }
  }
  temperature = 0;
  humidity = 0;
  isLight = false;
  status = Status.SAFE;

  private _STATUS = {
    'x': Status.DISCONNECT,
    'o': Status.SAFE,
    'i': Status.SMOKE,
    'e': Status.FIRE
  };

  constructor(public dialog: MatDialog, public firebase: AngularFireDatabase) {
  }

  ngOnInit() {
    this.firebase.list(`modules/${this.room.MAC}`).snapshotChanges().subscribe(snapshots => {
      if (this.status !== this._STATUS[snapshots[3].payload.val().toString()]) {
        this.status = this._STATUS[snapshots[3].payload.val().toString()];
      }
      if (this._TEMP_HUMID !== snapshots[4].payload.val().toString()) {
        const data = snapshots[4].payload.val().toString().split(' ');
        this.temperature = parseFloat(data[0]);
        this.humidity = parseFloat(data[1]);
      }
      if (this.status !== snapshots[2].payload.val()) {
        this.isLight = snapshots[2].payload.val().toString() === `true`;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailInfoComponent, {});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  switchLight() {
    this.isLight = !this.isLight;
    this.firebase.list(`modules`).update(`${this.room.MAC}`, {led: this.isLight});
  }

}
