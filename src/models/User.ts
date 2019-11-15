import { Home } from './Home';

export class User {
  public UUID: string;
  public name: string;
  public email: string;
  private _HOMES: Array<Home>;

  get homes() {
    return this._HOMES;
  }

  constructor(UUID: string, name: string, email: string, homes: Array<Home>) {
    this.UUID = UUID;
    this.name = name;
    this.email = email;
    this._HOMES = homes;
  }

  toString(): string {
    let returnString = `user ${this.UUID}; name: ${this.name}; email: ${this.email} has ${this._HOMES.length} houses`;
    if (this._HOMES.length !== 0) {
      for (let house of this._HOMES) {
        returnString += `\n${house.toString()}`;
      }
    }
    return returnString;
  }
}
