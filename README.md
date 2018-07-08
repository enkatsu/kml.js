[![Build Status](https://travis-ci.org/endoh0509/kml.js.svg?branch=master)](https://travis-ci.org/endoh0509/kml.js)

# kml.js

JavaScript KML parser library

## Installation

```sh
npm install kmljs --save
yarn add kmljs
bower install kmljs --save
```

## Usage

### Sample KML
```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>sample doc</name>
    <Style id="icon-1899-0288D1-nodesc-normal">
      <IconStyle>
        <color>ffd18802</color>
        <scale>1</scale>
        <Icon>
          <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href>
        </Icon>
        <hotSpot x="32" xunits="pixels" y="64" yunits="insetPixels"/>
      </IconStyle>
      <LabelStyle>
        <scale>0</scale>
      </LabelStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Placemark>
      <name>sample mark</name>
      <styleUrl>#icon-1899-0288D1-nodesc</styleUrl>
      <Point>
        <coordinates>
          139.4085320,35.6451853,0
        </coordinates>
      </Point>
    </Placemark>
  </Document>
</kml>
```

### Javascript

```js
var kmljs = require('kmljs');
var fs = require('fs');
var buffer = fs.readFileSync('KML_PATH');
var kmlDocument = new kmljs.KmlDocument(buffer.toString());
for(var placemark of kmlDocument.placemarks) {
  console.log(placemark);
}
```

### TypeScript

```bash
npm install --save fs-extra @types/fs-extra
```

```ts
import { KmlDocument } from 'kmljs';
import * as fs from 'fs-extra';
const buffer = fs.readFileSync('KML_PATH');
const kmlDocument = new KmlDocument(buffer.toString());
for(const placemark of kmlDocument.placemarks) {
  console.log(placemark);
}
```

## Test

```sh
npm test
```

## Build

```sh
npm run build
```
