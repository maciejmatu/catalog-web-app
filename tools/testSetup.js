/* This setting assures the .babelrc dev config (which includes
 hot module reloading code) doesn't apply for tests.
 But also, we don't want to set it to production here for
 two reasons:
 1. You won't see any PropType validation warnings when
 code is running in prod mode.
 2. Tests will not display detailed error messages
 when running against production version code
 */
/* globals document */
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
const { JSDOM } = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

global.document = (new JSDOM('')).window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

/* eslint-disable no-undef */
documentRef = document;
