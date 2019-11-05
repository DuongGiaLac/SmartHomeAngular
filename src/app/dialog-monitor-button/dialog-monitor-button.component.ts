import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dialog-monitor-button',
  templateUrl: './dialog-monitor-button.component.html',
  styleUrls: ['./dialog-monitor-button.component.scss']
})
export class DialogMonitorButtonComponent implements OnInit {

  // @Output()
  // switchLight = new EventEmitter();
  @Input()
  isLight = false;
  constructor() { }

  ngOnInit() {
  }

  triggerSwitch() {
  }

}
