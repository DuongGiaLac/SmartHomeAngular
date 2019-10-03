import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from '../../../models/Enums';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  @Input()
  name = 'Living Room';
  @Input()
  temperature = 18.0;
  @Input()
  humidity = 20.0;
  @Input()
  isLight = false;
  @Input()
  status: Status = Status.DISCONNECT;
  @Output()
  switchLight = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
