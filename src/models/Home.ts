import { Module } from './Module';
import { AngularFireDatabase } from '@angular/fire/database';

export class Home {

  get name(): string {
    return this._NAME;
  }

  get modules(): Array<Module> {
    return this._MODULES;
  }

  constructor(public firebase: AngularFireDatabase, private _NAME = '', private _MODULES: Array<Module> = []) {
  }

  parseHome(input: any, firebase: AngularFireDatabase) {
    this._NAME = input.name;
    if (input.modules) {
      this._MODULES = Object.keys(input.modules).map(addr => {
        return new Module(addr, input.modules[addr], firebase);
      });
    }
  }

  toString(): string {
    let result = '';
    for (const module of this._MODULES) {
      result += `${module}; `;
    }
    return result;
  }
}
