import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import closure from 'rollup-plugin-closure-compiler-js';

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
      include: 'node_modules/rxjs/**',
      sourceMap: false
    }),
    closure({
      /* Rollup wraps everyting in an IIFE */
      assumeFunctionWrapper: true,
      languageIn: 'ECMASCRIPT5',
      /* Advanced would save us a *lot* of space but breaks Angular */
      compilationLevel: 'SIMPLE',
      rewritePolyfills: true,
      useTypesForOptimization: true,
      warningLevel: 'QUIET'
    })
  ]
}