import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  rootElement: '#nos-app',
  LOG_TRANSITIONS: ['development', 'test'].includes(config.environment),
  LOG_TRANSITIONS_INTERNAL: ['development', 'test'].includes(config.environment)
});

loadInitializers(App, config.modulePrefix);

export default App;
