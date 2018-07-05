export class Style {
  private id: string = '';
  private iconStyle: IconStyle | null = null;
  private labelStyle: LabelStyle | null = null;
  private balloonStyle: BalloonStyle | null = null;

  constructor(obj: any) {
    this.id = obj.$.id;
    this.iconStyle = new IconStyle(obj.IconStyle);
    this.labelStyle = new LabelStyle(obj.IconStyle);
    this.balloonStyle = new BalloonStyle(obj.IconStyle);
  }
}

export class IconStyle {
  private color: string = '';
  private scale: number = 0;
  private icon: string = '';
  private hotSpot: HotSpot | null = null;

  constructor(obj: any) {
    this.color = obj.color;
    this.scale = Number(obj.scale);
    this.icon = obj.icon;
    this.hotSpot = new HotSpot(obj.hotSpot);
  }
}

export class HotSpot {
  private x: number = 0;
  private y: number = 0;;
  private xunits: string = '';
  private yunits: string = '';

  constructor(obj: any) {
    this.x = Number(obj.$.x);
    this.y = Number(obj.$.y);
    this.xunits = obj.$.xunits;
    this.yunits = obj.$.yunits;
  }
}

export class LabelStyle {
  private scale: number = 0;
  constructor(obj: any) {
    this.scale = Number(obj.scale);
  }
}

export class BalloonStyle {
  private text: string = '';

  constructor(obj: any) {
    this.text = obj.text;
  }
}
