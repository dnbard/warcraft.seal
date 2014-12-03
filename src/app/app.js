/** @jsx React.DOM */

var React = require('react'),
    Events = require('./enums/events'),
    Pages = require('./enums/pages'),
    WelcomePage = require('./pages/welcome'),
    AnotherPage = require('./pages/anotherPage'),
    PubSub = require('pubsub-js'),
    Application;

Application = React.createClass({
    render: function() {
        return (
            <div id="pages">
                <WelcomePage />
                <AnotherPage />
            </div>
        );
    }
});

React.render(
    <Application />,
    document.getElementById('app')
);

PubSub.publish(Events.PAGE.CHANGED, Pages.WELCOME);
