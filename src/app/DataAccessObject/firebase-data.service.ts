import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from '../../models/User';
import {Home} from '../../models/Home';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  private user: User;

  get home(): Array<string> {
    return this.user.homes.map(house => house.name) || [];
  }

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
    });
  }
}
