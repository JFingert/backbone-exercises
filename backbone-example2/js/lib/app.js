$(function () { // wait for on-ready
	//add another view that responds to changes in the model.
	//make it say, "Whoa thats a huge number" when number > 900
	//and "little number when below 100"

	var AppView = Backbone.View.extend({
		el: '#random-number-app',//every backbone view has an associated dom element

		initialize: function () {
			this.render();
		},

		template: function (context) {
			return "<h1>" + context.rannum + "</h1>";
		},

		render: function () {
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	var AppModel = Backbone.Model.extend({

		initialize: function () {
			this.newRandomNumber();
		},

		newRandomNumber: function () {
			var number = Math.floor(Math.random() * 1000);
			this.set('rannum', number);

		}
	});

	var AppCommentary = Backbone.View.extend({
		el: '#random-number-comentary',//every backbone view has an associated dom element

		events: {
			'click button': 'randomButtonPressed'
		},

		initialize: function () {
			this.render();
		},

		template: function (str) {
			return '<button class="pure-button pure-button-primary">Random</button>' +
			'<h2>' + str + '</h2>';
		},

		render: function () {
			var randomNumber = this.model.get('rannum');
			if (randomNumber > 900) {
				 this.$el.html(this.template("Whoa! That's a HUGE number, baby!!!"));
			} else if (randomNumber < 100){
				 this.$el.html(this.template("Yikes! That's a teeny-tiny number, lil guy!!!"));
			} else {
				this.$el.html(this.template("I absolutely love numbers!"));
			}
		},

		randomButtonPressed: function () {
			this.model.newRandomNumber();
		}
		
	});

var myModel = new AppModel();

var app = new AppView({model: myModel});

var commentary = new AppCommentary({model: myModel});

app.listenTo(myModel, 'change', app.render);

commentary.listenTo(myModel, 'change', commentary.render);


window.app = app;

});