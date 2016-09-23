/* jslint node: true, esnext: true */
'use strict';

import A from './A';

import getType from 'model-attributes';

export default class B extends A {
  constructor() {
    super();
    console.log('constructor B');
    this.type = getType('string');
    //console.log(`type: ${this.type}`);
  }
}
