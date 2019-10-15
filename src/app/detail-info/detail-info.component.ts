import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RealtimeDBService } from '../../services/firebase/realtime-db.service';
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  moduleName: String;

  constructor(public firebase: AngularFireDatabase, public firebase_service: RealtimeDBService) {
    this.moduleName = firebase_service.homes[0].name;
  }

  saveNameChange() {
    this.firebase.list(`users/ggID/homes/${this.firebase_service.homes}`).update(name, this.moduleName);
  }

  ngOnInit() {
  }
}
