import cleanup from 'rollup-plugin-cleanup';
import executable from 'rollup-plugin-executable';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [nodeResolve(), commonjs()],
  input: pkg.module,

  output: {
    file: pkg.main,
    format: 'cjs'
  }
};
