import Ember from 'ember';
import SemanticRouteMixin from 'semantic-ui-ember/mixins/application-route';
import ResetScroll from '../mixins/reset-scroll';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var ApplicationRoute = Ember.Route.extend(ApplicationRouteMixin,ResetScroll,SemanticRouteMixin, {
  actions:{
    invalidateSession: function(){
      Ember.$('.left.sidebar').sidebar('toggle');
      this.get('session').invalidate();
    },
    sessionAuthenticationSucceeded: function(){
      this.transitionTo('index');
      this.notifications.addNotification({
          message:'Welcome!',
          type:'info',
          autoClear:true,
      });
    },
    sessionInvalidationSucceeded: function(){
      this.transitionTo('index');
      this.notifications.addNotification({
          message:'See you soon!',
          type:'info',
          autoClear:true,
      });
      Ember.$.ajax({
        url:'https://francophone-doright-6493.herokuapp.com/api/rest-auth/logout/',
        type:'POST',
        accepts: 'application/json',
      });

    },
  }
});

export default ApplicationRoute;
