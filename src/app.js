
/* jslint node: true, esnext: true */
'use strict';

export default function() { console.log('hallo'); }

export class A {
  constructor() {
    console.log('constructor');
  }
}


console.log('B');
