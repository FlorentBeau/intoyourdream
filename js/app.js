App = Ember.Application.create();

App.Router.map(function() {
  this.resource('dreams');
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.extend({
    url: 'http://localhost:5000'
  })
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('dreams');
  }
});

App.DreamsRoute = Ember.Route.extend({
  model: function() {
    return App.Dream.find();
  }
});

App.Dream = DS.Model.extend({
  dream: DS.attr('string'),
  pseudo: DS.attr('string'),
  sex: DS.attr('string')
});