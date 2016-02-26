var expect = require('chai').expect;
var len = require('./index.js');

describe('Tests for getting lenght of object', function () {
  it('should return lenght of object', function () {
    expect(len({one: 1, two: 2, three: 3})).to.be.eql(3);
  });

  it('should return lenght of array like object (arguments)', function () {
    function dummy () {
      expect(len(arguments)).to.be.eql(3);
    }
    dummy(1, 2, 3);
  });
});
