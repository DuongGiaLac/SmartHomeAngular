import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  HomesTitles(): Array<string> {
    return this.user.homes.map(home => home._NAME);
  }

  constructor(public firebase: AngularFireDatabase, public user: User = null) {
    // this.firebase.list('users/ggID').snapshotChanges().subscribe(snapshots => {
    //   this.user = new User();
    //   this.user.email = snapshots[0].payload.val().toString();
    //   let homes = Object.values(snapshots[1].payload.val());
    //   this.user.homes = homes.map(house => {
    //     let newHouse = new Home();
    //     newHouse.parseHome(house);
    //     return newHouse;
    //   });
    // });
  }
}
