//////////////////////////////////////////////
///
///     mvvm
///     https://github.com/joelcoxokc/mvvm
///     2014, JoelCox
///
'use strict';
/////////////////////////////
///     Module Dependencies
var express = require('express'),
    path    = require('path');

/////////////////////////////////
///     @Environment Configuation
///     @NODE_ENV        production
///
module.exports = function(app) {

    app.set('env',     'production');
    // app.set('config',  configuation);
    app.set('appPath', 'build');
    console.log('** BUILD **');
    console.log('serving from ' + './build/');
    app.use('/', express.static('./build/'));

};