$(function () { // wait for on-ready

	var AppView = Backbone.View.extend({
		el: 'body', //every backbone view has an associated dom element

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html("<h1>Hallo, " + this.model.attributes.name + "</h1>");
			return this;
		}
	});

	var AppModel = Backbone.Model.extend({

	});

	var myModel = new AppModel({name: 'Gary'});

	var app = new AppView({model: myModel});

	app.listenTo(myModel, 'change', app.render);

	window.app = app;

});