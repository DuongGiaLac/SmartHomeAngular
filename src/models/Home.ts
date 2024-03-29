import {Module} from './Module';

export class Home {

  get name(): string {
    return this._NAME;
  }

  get modules(): Array<Module> {
    return this._MODULES;
  }

  constructor(private _NAME = '', private _MODULES: Array<Module> = []) {
  }

  parseHome(input: any) {
    this._NAME = input.name;
    if (input.modules) {
      this._MODULES = Object.keys(input.modules).map(addr => {
        return new Module(addr, input.modules[addr]);
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
