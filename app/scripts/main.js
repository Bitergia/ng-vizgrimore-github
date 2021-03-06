/* ========================================================================
 * main.js v0.0.1
 * Main routing configuration
 * ========================================================================
 * Copyright 2015 Jose Manrique Lopez de la Fuente
 * Licensed under MIT (/LICENSE)
 * ======================================================================== */

// jshint devel:true
(function () {
'use strict';

var app = angular.module('ngVizGrimoire', ['ngRoute', 'ui.bootstrap', 'nvd3', 'vizgrimoireControllers', 'vizgrimoireDirectives']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when(
    '/',{
      templateUrl: 'templates/index.html',
    }
  ).when(
    '/scm', {
      templateUrl: 'templates/scmOverview.html'
    }
  ).when(
    '/its', {
      templateUrl: 'templates/itsOverview.html'
    }
  ).when(
    '/scr', {
      templateUrl: 'templates/scrOverview.html'
    }
  ).when(
    '/about', {
      templateUrl: 'templates/about.html'
    }
  ).when(
    '/chart/:widget/:datasource', {
      templateUrl: 'templates/chart.html'
    }
  ).otherwise({
    templateUrl: 'templates/404.html'
  });
}]);

}());
