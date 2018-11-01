'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let options = {};
  options['ember-cli-babel'] = {includePolyfill: true};
  const app = new EmberApp(defaults, options);
  app.import(
      'node_modules/@cityofzion/neon-js/lib/index.js',
      { using: [{ transformation: 'cjs', as: '@cityofzion/neon-js' }] }
    );
  app.import(
      'node_modules/@nosplatform/api-functions/lib/index.js',
      { using: [{ transformation: 'cjs', as: '@nosplatform/api-functions' }] }
    );
  return app.toTree();
};
