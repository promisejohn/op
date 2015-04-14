'use strict';

/**
 * @ngdoc function
 * @name opApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the opApp
 */
angular.module('opApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
