'use strict';
const chai = require('chai');
const expect = chai.expect;
const kmljs = require('../dist/index.js');
const fs = require('fs');

describe('KmlDocument class test', () => {
  const KML_PATH = './test/kml/test.kml';

  it('should read KML test file', () => {
    expect(() => fs.readFileSync(KML_PATH))
      .not.throw(Error);
  });

  it('new KmlDocument should return object', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument).to.be.a('object');
  });

  it('name should get a string', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.name).to.be.a('string');
  });

  it('styles should return array', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.styles).to.be.a('array');
  });

  it('styleMaps should return array', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.styleMaps).to.be.a('array');
  });

  it('placemarks should return array', () => {
    const buffer = fs.readFileSync(KML_PATH);
    const kmlDocument = new kmljs.KmlDocument(buffer.toString());
    expect(kmlDocument.placemarks).to.be.a('array');
  });
});
