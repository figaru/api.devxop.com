Meteor.publish('itemsSubscriptionsPublic', function(items){
	return Items.find({"_id": { "$in" : items} });
});

Meteor.publish('displayTemplatesSubscriptionsPublic', function(deviceId){
	return DisplayTemplates.find({"device_id": deviceId});
});

Meteor.publish('devicesSubscriptionsPublic', function(deviceId){
	return Devices.find({"device_id": deviceId});
});

Meteor.publish('videos', function(){
	return Videos.find({});
});

Meteor.publish('images', function(){
	return Images.find({});
});

Meteor.publish('thumbnails', function(){
	return Thumbnails.find({});
});