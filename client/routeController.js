DisplayController = RouteController.extend({
	layoutTemplate: 'displayBase',
	/* waitOn: function(){
		return [
			Meteor.subscribe('itemsSubscriptionsImage'),
			Meteor.subscribe('devicesSubscriptions'),
			Meteor.subscribe('displayTemplatesSubscriptions')
		];
	} */
});


Router.route("/", {
    name: "home",
	layoutTemplate: 'displayBase',
	action: function () {
        this.render("landing");
    }
});