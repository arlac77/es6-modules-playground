import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  format: 'cjs',
  plugins: [nodeResolve(), commonjs()]
};
