import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Home} from '../../models/Home';
import {User} from '../../models/User';
import {AngularFireDatabase} from '@angular/fire/database';
import {Module} from '../../models/Module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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
