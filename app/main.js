'use strict';
var app = angular.module('ats.app', []);
app.controller('AppCtrl', ['$scope', require('./controller/AppController')]);
