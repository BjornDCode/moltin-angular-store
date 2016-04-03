'use strict';

describe('Service: moltin', function () {

  // load the service's module
  beforeEach(module('storeApp'));

  // instantiate service
  var moltin;
  beforeEach(inject(function (_moltin_) {
    moltin = _moltin_;
  }));

  it('should do something', function () {
    expect(!!moltin).toBe(true);
  });

});
