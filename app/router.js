import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs');
  this.route('about');
  this.route('blog',{path:'/blogs/:blog_slug'});
  this.route('login');
  this.route('invalidate');
});

export default Router;
