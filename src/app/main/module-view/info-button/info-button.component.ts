import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-button',
  template: `
      <mat-icon style="margin: 5px auto;">{{ icon }}</mat-icon>
      <div style="display: block; text-align: center;">{{ _type }}</div>
  `,
})
export class InfoButtonComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _type: string;
  private icon: string;

  @Input()
  set type(value: string) {
    this._type = value;
    switch (value) {
      case 'EDIT':
        this.icon = 'create';
        break;
      case 'DISCONNECTED':
      case 'SMOKE':
      case 'FIRE':
      case 'SAFE':
      case 'ON':
      case 'OFF':
      default:
        this.icon = 'emoji_objects';
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
