import { object2Array } from './util';

export class StyleMap {
  private id: string = '';
  private pairs: Pair[] = [];

  constructor(obj: any) {
    this.id = obj.$.id;
    this.pairs = this.parsePair(obj.Pair);
  }

  parsePair(obj: any): Pair[] {
    return object2Array(obj, Pair);
  }
}

export class Pair {
  private key: string = '';
  private styleUrl: string = '';

  constructor(obj: any) {
    this.key = obj.key;
    this.styleUrl = obj.styleUrl;
  }
}
