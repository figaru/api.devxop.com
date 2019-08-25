import { DBConnection } from "meteor/mstrlaw:remote-db";

Meteor.startup(() => {
    console.log('***');

    var db_url = process.env.MONGO_URL.split(':');
	
	console.log('*** DB:  ' + db_url[db_url.length -1 ]);

    console.log('[SYS] API SERVER started @ '+ moment().utc().toISOString() + '\n***');


    //#######################
	//	CLIENT CONNECTION
	//#######################

	clientWorker = DDP.connect("http://localhost:3000");

	//#######################
	//	DATABASE CONNECTION
	//#######################
	var db_connection =  new DBConnection("mongodb://localhost:27017/meteor");
	var remoteDB = db_connection.initConnection();
	
	if(db_connection.connected()){
		
		//Init collections (both local & remote)
		initCollections(remoteDB);

		//#######################
		//	TRIGGER PUBLICATIONS ONCE COLLECTIONS ARE READY
        //triggerPublications();
        
        console.log(Meteor.users.find().fetch());

		console.log('*** SYS: A-OK!');
	}
	else{
		console.log('*** ERR: UNABLE TO CONNECT TO REMOTE DB!');	
	}

   /*  Meteor.connection = DDP.connect('http://localhost:3000');
    Accounts.connection = Meteor.connection;
    //Meteor.users = new Meteor.Collection('users');
    Meteor.connection.subscribe('users');


    console.log(Meteor.users.find().fetch()); */

});