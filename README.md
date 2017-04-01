# Angular Bundling with AOT Compilation

Most Angular projects get set up the simplest way possible - easier to code, easier
to build, easier to deploy. But this typically means you end up delivering a lot
of unnecessary bloat to your clients which is a big deal in the age of cell phones
and tablets.

## What are we doing wrong?
These are the most common issues:

* Not pre-compiling
* Unnecessary libraries
* Sub-optimal imports
* Not tree-shaking
* Not compressing output

## Solutions
Each of these is shown off in this application:

* Pre-compile with Angular's NGC AOT compiler
 Now we don't have to deliver the @angular/compiler to the client
* Strip out use of 'one-off' libraries and CSS libs
 By avoiding large libraries and instead just writing what we need (assuming it's simple) we can reduce the total code in play
* Avoid overly-broad imports, ensure targeting libraries with correct module imports
 Libraries like Lodash are notorious for pulling in the entire library unless you specially-craft your imports
* Use a modern bundler, minify and uglify
  Rollup and Webpack 2 are capable of dropping (some) dead code
* At a minimum enable GZIP on your server
 Even better, conditionally provide optimized bundles using newer algorithms like Brotli to browsers that support them

## Requirements
- Node & NPM (tested with Node v7.8.0, NPM v4.2.0)

## Running the example
This project has been set up to run the exact same codebase in two modes:
simple development mode (inefficient) and optimized production mode. By 
looking at the console output as well as your browser's Development Tools
it is easy to see the relative improvement in application size.

### Development mode
1. `npm install`
2. `npm run start`
3. In your browser navigate to `http://localhost:8000`
4. `ctrl-c` to quit

### Production mode
1. `npm install`
2. `npm run start:aot`
3. In your browser navigate to `http://localhost:8000`
4. `ctrl-c` to quit

## Licensing
This code is provided under the terms of the MIT license: basically you're free to do whatever you want with it, but no guarantees are made to its validity, stability, or safety. All works referenced by or utilized by this project are the property of their respective copyright holders and retain licensing that may be more restrictive.