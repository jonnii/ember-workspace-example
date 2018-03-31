import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('admin-engine', { path: 'admin' });
  this.mount('explorer-engine', { path: 'explorer' });
});

export default Router;
