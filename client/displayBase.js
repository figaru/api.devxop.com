var video;
var canvas;
var snap;
var errorMsgElement;

var constraints = {
    audio: true,
    video: {
        width: 640, height: 360
    }
};

var errBack = function (error) {
    // alert("Video capture error: ", error.code);
    console.log(error);
};

Template.displayBase.onRendered(function () {

    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    snap = document.getElementById("snap");
    errorMsgElement = document.querySelector('span#errorMsg');


    // Load init
    init();

    // Ask the browser for permission to use the Webcam
    if (navigator.getUserMedia) {                    // Standard
        navigator.getUserMedia(constraints, init, errBack);
    } else if (navigator.webkitGetUserMedia) {        // WebKit
        navigator.webkitGetUserMedia(constraints, init, errBack);
    } else if (navigator.mozGetUserMedia) {        // Firefox
        navigator.mozGetUserMedia(constraints, init, errBack);
    };

    // Draw image
});

// Access webcam
async function init() {
    try {

        /* handleSuccess(stream);

        setTimeout(function(){
            stream.stop();
        }, 5000); */

        let devId = Router.current().params.query;

        if (!devId) {
            console.log("no dev id -> do nothing");
        } else {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);

            window.stream = stream;
            video.srcObject = stream;

            window.setTimeout(function () {
                //console.log("timeout")

                var context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, 640, 360);
                //console.log(canvas.toDataURL());

                let data = {
                    screenshot: canvas.toDataURL(),
                }

                Meteor.call("devices.edit", devId, data, function () {
                    console.log("save screen shot");
                    stream.getTracks().forEach(track => track.stop())
                });

            }, 5000);
        }





    } catch (e) {
        console.log(e);
    } finally {

    }
}

// Success
function handleSuccess(stream) {


}
