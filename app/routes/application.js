import Ember from 'ember';
import SemanticRouteMixin from 'semantic-ui-ember/mixins/application-route';
import ResetScroll from '../mixins/reset-scroll';

var ApplicationRoute = Ember.Route.extend(ResetScroll,SemanticRouteMixin, {});

export default ApplicationRoute;
