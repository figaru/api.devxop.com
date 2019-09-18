Devices = new Mongo.Collection('devices');

Companies = new Meteor.Collection('companies');


Items = new Meteor.Collection('items');


Categories = new Meteor.Collection('categories');

DisplayTemplates = new Meteor.Collection('displayTemplates');

/* Videos = new Meteor.Collection("videos");
 */

var baseUrl = "";

if (Meteor.isServer) {
    baseUrl = process.env.PWD;



    //console.log(process.env);
}


var videoStore = new FS.Store.FileSystem("videos");

Videos = new FS.Collection("videos", {
    stores: [videoStore]
});



Videos.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    },
    'update': function () {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        return true;
    },
    'download': function() {
        return true;
    }
});


var imageStore = new FS.Store.FileSystem('images');
var thumbsStore = new FS.Store.FileSystem('thumbnails');

Images = new FS.Collection('images', {
    stores: [imageStore]
});

Thumbnails = new FS.Collection('thumbnails', {
    stores: [thumbsStore]
});


Images.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    },
    'update': function () {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        return true;
    },
    'download': function() {
        return true;
    }
});

Thumbnails.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    },
    'update': function () {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        return true;
    },
    'download': function() {
        return true;
    }
});