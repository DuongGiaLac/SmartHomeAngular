import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Home} from '../../models/Home';
import {User} from '../../models/User';
import {AngularFireDatabase} from '@angular/fire/database';
import {Module} from '../../models/Module';

@Component({
  selector: 'app-main',
  template: `
      <mat-tab-group [selectedIndex]="selected.value" (selectedIndexChange)="selected.setValue($event)"
                     style="background-color: #e5e5e5 ; height: 100%">
          <mat-tab *ngFor="let tab of tabs" [label]="tab.name">
              <div id="wrapper" style="max-width: 1000px; margin: 10px auto; padding: 0 20px">
                  <button mat-raised-button color="primary">Connect new module</button>
                  <app-module-view *ngFor="let room of rooms" [room]="room"></app-module-view>
              </div>
          </mat-tab>
      </mat-tab-group>
  `,
})
export class MainComponent implements OnInit {
  // tabs = this.model.HomesTitles;
  private tabs: Array<Home>;
  private rooms: Array<Module>;
  private user: User;

  selected = new FormControl(0);

  constructor(private firebase: AngularFireDatabase) {
    this.firebase.list('users/ggID').snapshotChanges().subscribe(snapshots => {
      // tslint:disable-next-line: prefer-const
      let email = snapshots[0].payload.val().toString();
      // tslint:disable-next-line: prefer-const
      let homes = Object.values(snapshots[1].payload.val()).map(house => {
        // tslint:disable-next-line: prefer-const
        let newHouse = new Home();
        newHouse.parseHome(house);
        return newHouse;
      });
      // tslint:disable-next-line: prefer-const
      let name = snapshots[2].payload.val().toString();
      this.user = new User('ggID', name, email, homes);
      console.log(homes);
      // assign
      this.tabs = homes;
      this.rooms = homes[0].modules;
    });
  }


  ngOnInit() {
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
