import { AngularFireDatabase } from '@angular/fire/database';
import { Status } from './Enums';

export class Module {
  private _TEMP_HUMID: string;
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

  get name(): string {
    return this._NAME;
  }
  set name(value: string) {
    this._NAME = value;
  }
  get MAC(): string {
    return this._MAC;
  }
  private statusMap = {
    'x': Status.DISCONNECT,
    '0': Status.SAFE,
    '1': Status.SAFE,
    '2': Status.SMOKE,
    '3': Status.FIRE
  };
  constructor(private _MAC: string = '', private _NAME: string = '', private firebase: AngularFireDatabase) {
    this.firebase.list(`modules/${this._MAC}`).snapshotChanges().subscribe(snapshots => {
      if (this.status !== this.statusMap[snapshots[3].payload.val().toString()]) {
        this.status = this.statusMap[snapshots[3].payload.val().toString()];
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

  public switchLight() {
    this.isLight = !this.isLight;
    this.firebase.list(`modules`).update(`${this._MAC}`, { led: this.isLight });
  }

}
