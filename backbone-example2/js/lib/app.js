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
			return '<button class="pure-button pure-button-primary">Random Number Generator + Coppola Film Chooser!</button>' +
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

	var Coppola = Backbone.View.extend({
		el: '#coppola-array-view',

		initialize: function () {
			this.render();
		},

		template: function (str) {
			return '<h2>' + str + '</h2>';
		},

		render: function () {
			var randomNumber = this.model.get('rannum');
			var array = ["Godfather", "Rumblefish", "Outsiders", "Tucker", "Flamingo Kid", "Godfather 2", "Pinocchio", "Apocalypse Now", "Tetro", "Dracula"];
			if (randomNumber <= 100) {
				this.$el.html(this.template(array[0]));
			} else if(randomNumber > 100 && randomNumber <= 200) {
				this.$el.html(this.template(array[1]));
			} else if (randomNumber > 200 && randomNumber <= 300) {
				this.$el.html(this.template(array[2]));
			} else if(randomNumber > 300 && randomNumber <= 400) {
				this.$el.html(this.template(array[3]));
			} else if(randomNumber > 400 && randomNumber <= 500) {
				this.$el.html(this.template(array[4]));
			} else if (randomNumber > 500 && randomNumber <= 600) {
				this.$el.html(this.template(array[5]));
			} else if(randomNumber > 600 && randomNumber <= 700) {
				this.$el.html(this.template(array[6]));
			} else if(randomNumber > 700 && randomNumber <= 800) {
				this.$el.html(this.template(array[7]));
			} else if (randomNumber > 800 && randomNumber <= 900) {
				this.$el.html(this.template(array[8]));
			} else {
				this.$el.html(this.template(array[9]));
			}
	}
		
	});

var myModel = new AppModel();

var app = new AppView({model: myModel});

var commentary = new AppCommentary({model: myModel});

var coppola = new Coppola({model: myModel})

app.listenTo(myModel, 'change', app.render);

commentary.listenTo(myModel, 'change', commentary.render);

coppola.listenTo(myModel, 'change', coppola.render);


window.app = app;

});