'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('test() test', () => {
    it('should return test', () => {
        var result = index.test();
        expect(result).to.equal('test');
    });
});
