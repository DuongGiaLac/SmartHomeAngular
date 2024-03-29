import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-monitor-button',
  templateUrl: './dialog-monitor-button.component.html',
  styleUrls: ['./dialog-monitor-button.component.scss']
})
export class DialogMonitorButtonComponent implements OnInit {

  isLight: boolean = true;
  constructor() { }

  switchLight() {
    this.isLight = !this.isLight;
  }

  ngOnInit() {
  }

}
