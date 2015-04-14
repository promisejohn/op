'use strict';

describe('Controller: FrontdataCtrl', function () {

  // load the controller's module
  beforeEach(module('opApp'));

  var FrontdataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrontdataCtrl = $controller('FrontdataCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
