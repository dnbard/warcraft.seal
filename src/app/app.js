var ko = require('knockout'),
    Events = require('./enums/events'),
    Pages = require('./enums/pages'),
    PubSub = require('pubsub-js'),
    Application;

ko.applyBindings();

console.log(indexHtml);

PubSub.publish(Events.PAGE.CHANGED, Pages.WELCOME);
