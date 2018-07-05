import { object2Array } from './util';
import { parseString } from 'xml2js';
import { Style } from './style';
import { StyleMap } from './style-map';
import { Placemark } from './placemark';

export class KmlDocument {
  private name: string = '';
  private styles: Style[] = [];
  private styleMaps: StyleMap[] = [];
  private placemarks: Placemark[] = [];
  private options = { explicitArray: false };

  constructor(kml: string) {
    parseString(kml, this.options, (err, result) => {
      this.name = result.kml.Document.name;
      this.styles = this.parseStyles(result.kml.Document.Style);
      this.styleMaps = this.parseStyleMaps(result.kml.Document.StyleMap);
      this.placemarks = this.parsePlacemarks(result.kml.Document.Placemark);
    });
  }

  public parseStyles(obj: any | [any]): Style[] {
    return object2Array(obj, Style);
  }

  public parseStyleMaps(obj: any | [any]): StyleMap[] {
    return object2Array(obj, StyleMap);
  }

  public parsePlacemarks(obj: any | [any]): Placemark[] {
    return object2Array(obj, Placemark);
  }

  public toJson(): string {
    return JSON.stringify(this);
  }
}
