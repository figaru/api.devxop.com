//API Local & Remote Collections
console.log('* Init Local Collections')
//Heartbeats is only used by the API service
Heartbeats = new Meteor.Collection('heartbeats');

//API Metrics
ServiceMetrics = new Meteor.Collection('serviceMetrics');

initCollections = function (database) {
	console.log('* Init Remote Collections')
	//For users, we use db.open (new Mongo.Collection creates conflict on remote db.)

	//new Mongo.Collection('userLogs', { _driver: database, idGeneration: 'STRING' });
	Meteor.users = database.open("users");

	/* Devices = new Mongo.Collection('devices', { _driver: database, idGeneration: 'STRING' });

	Companies = new Meteor.Collection('companies', { _driver: database, idGeneration: 'STRING' });

	Items = new Meteor.Collection('items', { _driver: database, idGeneration: 'STRING' });

	Categories = new Meteor.Collection('categories', { _driver: database, idGeneration: 'STRING' });

	DisplayTemplates = new Meteor.Collection('displayTemplates', { _driver: database, idGeneration: 'STRING' }); */

	/* Videos = new Meteor.Collection("videos");
	 */
}