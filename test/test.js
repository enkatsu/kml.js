'use strict';
const expect = require('chai').expect;
const kmljs = require('../dist/index.js');
const fs = require('fs');

describe('KmlDocument class test', () => {
  const KML_PATH = './test/kml/test.kml';

  it('should read KML test file', () => {
    expect(() => fs.readFileSync(KML_PATH))
      .not.throw(Error);
  });

  it('should return KmlDocument class\'s instance', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument).to.be.a('object');
  });

  it('should get a name', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.name).to.equal('sample doc');
  });

  it('should return KmlDocument Style array', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.styles).to.be.a('array');
  });

  it('should return KmlDocument StyleMap', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.styleMaps).to.be.a('array');
  });

  it('should return KmlDocument Placemark array', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.placemarks).to.be.a('array');
  });
});
