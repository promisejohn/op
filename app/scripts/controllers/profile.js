'use strict';

/**
 * @ngdoc function
 * @name opApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the opApp
 */
angular.module('opApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
