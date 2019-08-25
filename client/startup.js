import Materialize from 'materialize-css';
global.M = global.Materialize = Materialize;

$(function() {
    // Handler for .ready() called.

    setInterval(function(){
        let device = Session.get("device");

        if(device){
            //ping(device);
            //console.log(device);
            //console.log("pinging device");
            ping(device);
        }else{
            
        }
    }, 30000);
});


function ping(device){

    Meteor.call("devices.ping", device);
    /* $.ajax({
       url: 'http://devxop.ddns.net:5000/api/ping',
       success: function(result){
          alert('reply');
       },     
       error: function(result){
           alert('timeout/error');
       }
    }); */
 }