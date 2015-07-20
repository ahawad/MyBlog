import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  model: function(){
    return this.store.find('blog');
  },
  actions:{
    confirm: function(){
      this.send('openModal','modal');
    }
  }
});
