var DetailView = Backbone.View.extend({
	
	el: '#details', // every Backbone view has an associated DOM element

	template: require('../../templates/details.hbs'),

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function (context) {
		this.$el.html(this.template(this.model.get('currently')));
		return this;

		// var context = {};
		// context.timezone = this.model.get('timezone');
		// context.currently = this.model.get('currently');

		this.$el.html(this.template(context));
	}

});


module.exports = DetailView;