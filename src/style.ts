export class Style {
  private _iconStyle: IconStyle | null = null;
  private _labelStyle: LabelStyle | null = null;
  private _balloonStyle: BalloonStyle | null = null;

  constructor(obj: any) {
    this._iconStyle = new IconStyle(obj.IconStyle);
    this._labelStyle = new LabelStyle(obj.IconStyle);
    this._balloonStyle = new BalloonStyle(obj.IconStyle);
  }
}

export class IconStyle {
  constructor(obj: any) { }
}

export class LabelStyle {
  constructor(obj: any) { }
}

export class BalloonStyle {
  constructor(obj: any) { }
}
