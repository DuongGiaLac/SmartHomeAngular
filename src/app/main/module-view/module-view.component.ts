import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../../models/Enums';
import {AngularFireDatabase} from '@angular/fire/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DetailInfoComponent} from '../../detail-info/detail-info.component';
import {ModelsService} from '../../services/models.service';
import {User} from '../../../models/User';
import {Home} from '../../../models/Home';

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

  constructor(public dialog: MatDialog, public firebase: AngularFireDatabase) {
    // this.firebase.list('users/ggID').snapshotChanges().subscribe(snapshots => {
    //   // tslint:disable-next-line: prefer-const
    //   let email = snapshots[0].payload.val().toString();
    //   let homes = Object.values(snapshots[1].payload.val()).map(house => {
    //     // tslint:disable-next-line: prefer-const
    //     let newHouse = new Home();
    //     newHouse.parseHome(house);
    //     return newHouse;
    //   });
    //   let name = snapshots[2].payload.val().toString();
    //   let user = new User('ggID', name, email, homes);
    // });
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailInfoComponent, {});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
