//API Local & Remote Collections
console.log('* Init Local Collections')
//Heartbeats is only used by the API service
Heartbeats = new Meteor.Collection('heartbeats');

//API Metrics
ServiceMetrics = new Meteor.Collection('serviceMetrics');

initCollections = function(database){
	console.log('* Init Remote Collections')
	//For users, we use db.open (new Mongo.Collection creates conflict on remote db.)
	Meteor.users = database.open("users");
}