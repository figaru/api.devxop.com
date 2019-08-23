Meteor.startup(() => {
    console.log('***');

    var db_url = process.env.MONGO_URL.split(':');
	
	console.log('*** DB:  ' + db_url[db_url.length -1 ]);

    console.log('[SYS] API SERVER started @ '+ moment().utc().toISOString() + '\n***');


    console.log(Meteor.users.find().fetch());

});