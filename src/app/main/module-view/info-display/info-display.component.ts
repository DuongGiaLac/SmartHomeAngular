import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss']
})
export class InfoDisplayComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
