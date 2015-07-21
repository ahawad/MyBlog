import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,UnauthenticatedRouteMixin,{
  beforeModel:function(){
    Ember.$('.left.sidebar').sidebar('toggle');
  }
});
