'use strict';

/**
 * @ngdoc function
 * @name opApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the opApp
 */
angular.module('opApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
