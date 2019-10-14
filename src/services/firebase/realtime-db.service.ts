import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Home} from '../../models/Home';
import {User} from '../../models/User';
import {AuthenticatorService} from './authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDBService {
  private auth = new AuthenticatorService();
  private user: User;
  get homes(): Array<Home> {
    if (this.user == null) {
      return [];
    }
    return this.user.homes;
  }

  constructor(private firebase: AngularFireDatabase) {
    this.firebase.list(`users/${this.auth.uuid}`).snapshotChanges().subscribe(snapshots => {
      // tslint:disable-next-line: prefer-const
      let homes = Object.values(snapshots[1].payload.val()).map(house => {
        // tslint:disable-next-line: prefer-const
        let newHouse = new Home();
        newHouse.parseHome(house);
        return newHouse;
      });
      this.user = new User('ggID', snapshots[2].payload.val().toString(), snapshots[0].payload.val().toString(), homes);
    });
  }

}
