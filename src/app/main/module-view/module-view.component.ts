import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent implements OnInit {
  name = 'Living Room';
  temperature = '18';
  humidity = '???';
  constructor() { }

  ngOnInit() {
  }

}
