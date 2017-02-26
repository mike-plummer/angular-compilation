import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'dist/src/app-aot.js',
  dest: 'dist/app.js',
  sourceMap: false,
  format: 'iife',
  onwarn: ( warning, next ) => {
    if ( warning.code === 'THIS_IS_UNDEFINED' ) return;
    next( warning );
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    })
  ]
}