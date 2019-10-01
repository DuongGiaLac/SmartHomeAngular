import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tabs = [];
  rooms = ['ROOM01', 'ROOM02', 'ROOM03', 'ROOM04', 'ROOM05', 'ROOM06'];

  selected = new FormControl(0);

  constructor(database: AngularFireDatabase) {
    database.list('users/ggID/homes').valueChanges().subscribe(change => {
      change.forEach(item => {
        this.tabs.push(item);
      });
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
