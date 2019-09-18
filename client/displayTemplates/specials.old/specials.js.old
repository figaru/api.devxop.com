Template.displaySpecials.onRendered(function () {
    $(document).ready(function () {
        $('.slider').slider({
            indicators: false,
            duration: 400,
            interval: 6000,
        });
    });

    $('.slides').bind("DOMSubtreeModified", function () {
        console.log("changed! updating slider");
        setTimeout(function () {
            $('.slider').slider({
                indicators: false,
                duration: 1000,
                interval: 8000,
            });
        }, 2000);
    });
});

Template.displaySpecials.helpers({
    'plates': function () {
        return Session.get("plates");
    },
    'plateLang': function (plate) {
        let text = plate["info_" + Session.get("slideLang")];

        return text;

    }
});



