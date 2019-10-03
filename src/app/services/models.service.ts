import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  HomesTitles(): Array<string> {
    return this._USER._HOMES.map(home => home._NAME);
  }

  constructor(public firebase: AngularFireDatabase, public _USER = new User()) {
    this._USER._UUID = 'ggID';
    firebase.list(this._USER._UUID).valueChanges().subscribe(snapshot => {
      console.log(snapshot.values());
    });
  }
}
