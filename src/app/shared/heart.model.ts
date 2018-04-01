export class Heart {
  constructor(public full: boolean) { 
  }

  public getIconName(): string {
    return this.full ? "favorite" : "favorite_border";
  }
}