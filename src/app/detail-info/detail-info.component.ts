import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';
import { RealtimeDBService } from '../../services/firebase/realtime-db.service';
import { Module } from 'src/models/Module';
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  room: Module;
  homesModule: Array<Object> = [];
  module = {
    MAC: String,
    mod: {
      module: {
        moduleName: String,
      },
      name: String,
    }
  }
  constructor(public dialogRef: MatDialogRef<DetailInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private firebase: AngularFireDatabase, public firebase_service: RealtimeDBService) {
    this.room = new Module(data.room.MAC, data.room.name, firebase);
    // console.log(this.room);
  }

  ngOnInit() {
  }

  saveNameChange() {

    this.firebase.list('/users/ggID/homes').snapshotChanges().subscribe(snapshots => {
      console.log(snapshots[0].key);
      snapshots.forEach(home => {
        // this.module.mod = Object.values(home.payload.val());
        // this.module.MAC = 
        this.homesModule.push(Object.values(home.payload.val()));
        console.log(Object.values(home.payload.val()));
      }
      );
    });
  }

  switchLight() {
    this.room.switchLight();
  }

}
