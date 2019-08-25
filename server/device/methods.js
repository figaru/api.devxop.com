Meteor.methods({
    'devices.ping':function (device) {
        //console.log(data);
        
        Devices.update(device._id, {
            $set: {
                "last_ping": new Date().getTime
            },
        });
    }
})