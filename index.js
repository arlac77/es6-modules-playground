/* jslint node: true, esnext: true */
'use strict';

const b = require('./b');


new b();

/*
const SystemJS = require('systemjs');

SystemJS.import('./src/app.js').then(function (m) {
  console.log('XXX' + JSON.stringify(m));

  const x = new m.A();
  console.log('x ' + x);

}).catch(console.error);
*/
