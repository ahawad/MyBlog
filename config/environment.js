/* jshint node: true */

module.exports = function(environment) {
  var deploy_url = 'https://francophone-doright-6493.herokuapp.com';
  var ENV = {
    modulePrefix: 'my-blog',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST : deploy_url ,
      API_NAMESPACE: 'api'
    },
  };
  ENV['simple-auth']={
     authorizer: 'simple-auth-authorizer:token'
  };
  ENV['simple-auth-token']={
      serverTokenEndpoint:'https://francophone-doright-6493.herokuapp.com/api/rest-auth/login/',
      tokenPropertyName:'key',
      authorizationPrefix: 'Token ',
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = deploy_url;
    ENV.APP.API_NAMESPACE = 'api';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = deploy_url;
    ENV.APP.API_NAMESPACE = 'api';
  }

  return ENV;
};
