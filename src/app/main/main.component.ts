import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // tabs = this.model.HomesTitles;
  tabs = ['HOME 1'];
  rooms = ['ROOM01', 'ROOM02', 'ROOM03', 'ROOM04', 'ROOM05', 'ROOM06'];

  selected = new FormControl(0);

  constructor() {
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
