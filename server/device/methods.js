Meteor.methods({
    'devices.ping':function (device) {
        //console.log(data);
        
        Devices.update({
			_id: device._id,
		},
		{
			$set:{
				'ping_stamp': new Date().getTime()
			}
		});
    }
})