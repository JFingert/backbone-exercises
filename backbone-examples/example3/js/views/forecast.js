var ForecastView = Backbone.View.extend({
  el: '#forecast', // every Backbone view has an associated DOM element

  template: require('../../templates/forecast.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.get('currently')));
    return this;
  }

});

module.exports = ForecastView;