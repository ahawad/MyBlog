import Ember from 'ember';

export default Ember.Controller.extend({
  identification: null,
  password: null,
  isLogging:false,
  actions: {
    authenticate: function() {
      var self=this;
      var credentials = this.getProperties('identification', 'password'),
          authenticator = 'simple-auth-authenticator:token';
      this.set('isLogging',true);
      this.get('session').authenticate(authenticator, credentials);
      Ember.run.later(function(){
        self.set('isLogging',false);
      },1000);

    }
  }
});
