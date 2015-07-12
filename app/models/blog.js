import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  body:DS.attr('string'),
  post_create_date:DS.attr('date')
});
