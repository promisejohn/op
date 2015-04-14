'use strict';

/**
 * @ngdoc function
 * @name opApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the opApp
 */
angular.module('opApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
