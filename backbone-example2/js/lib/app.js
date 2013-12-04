$(function () { // wait for on-ready
	//add another view that responds to changes in the model.
	//make it say, "Whoa thats a huge number" when number > 900
	//and "little number when below 100"

	var AppView = Backbone.View.extend({
		el: '#random-number-app', '#random-number-comentary',//every backbone view has an associated dom element

		events: {
			'click button': 'randomButtonPressed'
		},

		initialize: function () {
			this.render();
		},

		template: function (context) {
			return "<h1>" + context.rannum + "</h1>" + 
			'<button class="pure-button pure-button-primary">Random</button>';
		},

		render: function () {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},

		randomButtonPressed: function () {
			this.model.newRandomNumber();
		}

		// comment: function () {
		// 	this.model.commentary();
		// }
	});

	var AppModel = Backbone.Model.extend({

		initialize: function () {
			this.newRandomNumber();
		},

		newRandomNumber: function () {
			var number = Math.floor(Math.random() * 1000);
			this.set('rannum', number);

		},

		commentary: function () {
			if (this.newRandomNumber.number > 900) {
				return "<h1>Whoa! That's a HUGE number, baby!!!</h1>";
			} else if (this.newRandomNumber.number < 100){
				return "<h1>Yikes! That's a teeny-tiny number, lil guy!!!</h1>";
			} 
		}
	});

	// var AppCommentary = Backbone.Model.extend({

		
	// });

var myModel = new AppModel();

var app = new AppView({model: myModel});

	//var commentary = new AppView({model: myModel});

	app.listenTo(myModel, 'change', app.render);

	window.app = app;

});