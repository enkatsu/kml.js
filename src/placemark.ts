import { object2Array } from './util';

export class Placemark {
  private name: string = '';
  private styleUrl: string = '';
  private point: Point | null = null;

  constructor(obj: any) {
    this.name = obj.name;
    this.styleUrl = obj.styleUrl;
    this.point = new Point(obj.Point);
  }
}

export class Point {
  private coordinates: {lat: number, lon: number} = {lat: 0, lon: 0};
  constructor(obj: any) {
    const splited = obj.coordinates.split(',').map((l: string) => l.trim());
    this.coordinates.lat = Number(splited[0]);
    this.coordinates.lon = Number(splited[1]);
  }
}
