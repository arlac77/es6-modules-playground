import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  input: 'tests/**/*-test.js',
  external: ['ava'],

  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-3'],
      exclude: 'node_modules/**'
    }),
    multiEntry()
  ],

  output: {
    file: 'build/test-bundle.js',
    format: 'cjs',
    sourcemap: true
  }
};
