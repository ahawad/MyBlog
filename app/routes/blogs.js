import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('blog');
  },
  actions:{
    confirm: function(){
      this.send('openModal','modal');
    }
  }
});
