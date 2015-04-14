'use strict';

/**
 * @ngdoc function
 * @name opApp.controller:FrontdataCtrl
 * @description
 * # FrontdataCtrl
 * Controller of the opApp
 */
 angular.module('opApp')
 .controller('FrontdataCtrl',['$log','$scope','$filter','ngTableParams' ,function ($log,$scope,$filter,ngTableParams) {
 	$scope.names = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	var mydata = [{id:0, sex: 'Male', company: 'BATA', address: 'UK',name: 'Moroni', age: 50},
 	{id:1, sex: 'Male', company: 'Baba', address: 'UK',name: 'Tiancum', age: 43},
 	{id:2, sex: 'Male', company: 'BATA', address: 'UK',name: 'Jacob', age: 27},
 	{id:3, sex: 'Male', company: 'baidu', address: 'UK',name: 'Nephi', age: 29},
 	{id:4, sex: 'Female', company: 'baba', address: 'UK',name: 'Enos', age: 34},
 	{id:5, sex: 'Male', company: 'BATA', address: 'UK',name: 'Tiancum', age: 43},
 	{id:6, sex: 'Male', company: 'BATA', address: 'UK',name: 'Jacob', age: 27},
 	{id:7, sex: 'Male', company: 'BATA', address: 'UK',name: 'Nephi', age: 29},
 	{id:8, sex: 'Male', company: 'baba', address: 'UK',name: 'Enos', age: 34},
 	{id:9, sex: 'Female', company: 'BATA', address: 'UK',name: 'Tiancum', age: 43},
 	{id:10, sex: 'Male', company: 'BATA', address: 'UK',name: 'Jacob', age: 27},
 	{id:11, sex: 'Male', company: 'BATA', address: 'UK',name: 'Nephi', age: 29},
 	{id:12, sex: 'Male', company: 'BATA', address: 'UK',name: 'Enos', age: 34},
 	{id:13, sex: 'Male', company: 'BATA', address: 'UK',name: 'Tiancum', age: 43},
 	{id:14, sex: 'Male', company: 'tencent', address: 'UK',name: 'Jacob', age: 27},
 	{id:15, sex: 'Male', company: 'BATA', address: 'UK',name: 'Nephi', age: 29},
 	{id:16, sex: 'Male', company: 'BATA', address: 'UK',name: 'Enos', age: 34}];

 	$scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 10,          // count per page
	        sorting: {
	            name: 'asc'     // initial sorting
	        },
            filter: {
                name: 'M'       // initial filter
            }
	    }, {
	        total: mydata.length, // length of data
	        getData: function($defer, params) {
	            // use build-in angular filter
                var filtedData = mydata;
                if(params.filter()) {
                    filtedData = $filter('filter')(filtedData, params.filter());
                }
                // var orderedData = filtedData;
                if(params.sorting()) {
                    filtedData = $filter('orderBy')(filtedData, params.orderBy());
                }

	            $defer.resolve(filtedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	});
    $scope.changeSelection = function(user) {
        $log.debug(user.id + ' : clicked, and selected: ' +  user.$selected);
    };
 }]);
