'use strict';
const path = require('path');
const ref = require('ene-ref-napi');
const assert = require('assert');

assert(ref.instance);

const bindings = require('node-gyp')(path.join(__dirname, '..'));
module.exports = bindings.initializeBindings(ref.instance);
