import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../../models/Enums';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  @Input()
  name = 'Living Room';
  @Input()
  temperature = 18.0;
  @Input()
  humidity = 20.0;
  @Input()
  isLight = false;
  @Input()
  status: Status = Status.SAFE;
  @Output()
  switchLight = new EventEmitter();

  constructor(public firebase: AngularFireDatabase) {
    // this.firebase.list('users/ggID').snapshotChanges().subscribe(snapshots => {
    //   const homes = Object.values(snapshots[1].payload.val());
    //   console.log(homes);
    // });
  }

  ngOnInit() {
  }

}
