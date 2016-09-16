/* jslint node: true, esnext: true */
'use strict';

import A from './A';

export default class B extends A {
  constructor() {
    super();
    console.log('constructor B');
  }
}
