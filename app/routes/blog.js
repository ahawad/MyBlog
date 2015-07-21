import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,ResetScroll,{
  model:function(params){
    return this.store.find('blog',params.blog_slug);
  }
});
