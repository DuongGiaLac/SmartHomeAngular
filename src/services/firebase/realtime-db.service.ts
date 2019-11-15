import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Home } from '../../models/Home';
import { User } from '../../models/User';
import { AuthenticatorService } from './authenticator.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class RealtimeDBService {
  private user: User;
  // private auth = new AuthenticatorService(this.user.UUID);
  private auth = new AuthenticatorService();
  get homes(): Array<Home> {
    if (this.user == null) {
      return [];
    }
    return this.user.homes;
  }

  constructor(private firebase: AngularFireDatabase, private afAuth?: AngularFireAuth) {
    // this.afAuth.user.subscribe((usr) => {
    //   this.user.UUID = usr.uid;
    //   this.user.email = usr.email;
    //   this.user.name = usr.displayName;
    // });
    this.firebase.list(`users/${this.auth.uuid}`).snapshotChanges().subscribe(snapshots => {
      // tslint:disable-next-line: prefer-const
      let homes = Object.values(snapshots[1].payload.val()).map(house => {
        // tslint:disable-next-line: prefer-const
        let newHouse = new Home(this.firebase);
        newHouse.parseHome(house, this.firebase);
        return newHouse;
      });
      this.user = new User('ggID', snapshots[2].payload.val().toString(), snapshots[0].payload.val().toString(), homes);
    });
  }
}
