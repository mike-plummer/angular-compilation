import nodeResolve from '@oasisdigital/rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import Visualizer from 'rollup-plugin-visualizer';

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
    // Using custom fork of rollup-plugin-node-resolve which adds custom 'es2015' field support that NG4 uses
    nodeResolve({
      es2015: true,
      module: false,
      browser: true
    }),
    commonjs({
      include: 'node_modules/rxjs/**',
      sourceMap: false
    }),
    // This could be unwise as your app grows in complexity...
    buble({ transforms: { dangerousForOf: true } }),
    Visualizer({
      filename: './rollup-stats.html'
    })
  ]
}