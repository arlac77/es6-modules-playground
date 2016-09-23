/* jslint node: true, esnext: true */
'use strict';

import A from './A';
import {
  getType
}
from 'model-attributes';
import {
  LogLevelMixin
}
from 'loglevel-mixin';

export default class B extends LogLevelMixin(A) {
  constructor() {
    super();
    console.log('constructor B');
    this.type = getType('string');
    console.log(`type: ${this.type.name}`);
    console.log(`logLevel: ${this.logLevel}`);
  }
}
