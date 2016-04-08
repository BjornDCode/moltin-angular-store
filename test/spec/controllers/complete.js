'use strict';

describe('Controller: CompleteCtrl', function () {

  // load the controller's module
  beforeEach(module('storeApp'));

  var CompleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompleteCtrl = $controller('CompleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CompleteCtrl.awesomeThings.length).toBe(3);
  });
});
