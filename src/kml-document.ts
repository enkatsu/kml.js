import { parseString } from 'xml2js';
import { Style } from './style';
import { StyleMap } from './style-map';
import { Placemark } from './placemark';

export class KmlDocument {
  private _name: string = '';
  private _styles: Style[] = [];
  private _styleMaps: StyleMap[] = [];
  private _placemarks: Placemark[] = [];
  private _options = { explicitArray: false };

  constructor(kml: string) {
    parseString(kml, this._options, (err, result) => {
      this._name = result.kml.Document.name;
      this._styles = this.parseStyles(result.kml.Document.Style);
      this._styleMaps = this.parseStyleMaps(result.kml.Document.Style);
      this._placemarks = this.parsePlacemarks(result.kml.Document.Style);
    });
  }

  public parseStyles(obj: any | [any]): Style[] {
    return this.object2Array(obj, Style);
  }

  public parseStyleMaps(obj: any | [any]): Style[] {
    return this.object2Array(obj, StyleMap);
  }

  public parsePlacemarks(obj: any | [any]): Style[] {
    return this.object2Array(obj, Placemark);
  }

  public object2Array(obj: any | [any], klass: any): any[] {
    if (Array.isArray(obj)) return obj.map(element => new klass(element));
    return [new klass(obj)];
  }

  get name(): string { return this._name; }

  get styles(): Style[] { return this._styles; }

  get styleMaps(): StyleMap[] { return this._styleMaps; }

  get placemarks(): Placemark[] { return this._placemarks; }
}
