import Ember from 'ember';

export default Ember.View.extend({
  willInsertElement: function(){
    Ember.$('#loading-spinner').remove();
  }
});
