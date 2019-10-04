class Home {
  public _NAME: string;
  private _MODULES: Array<Module>;

  parseHome(input: any) {
    this._NAME = input.name;
    this._MODULES = Object.keys(input.modules).map(MAC => new Module(MAC, input.modules.MAC));
  }
}
