export class Module {
  private _MAC: string;
  private _NAME: string;
  get name(): string {
    return this._NAME;
  }
  get MAC(): string {
    return this._MAC;
  }
  constructor(MAC: string = '', name: string = '') {
    this._MAC = MAC;
    this._NAME = name;
  }

}
