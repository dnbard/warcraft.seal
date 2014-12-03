var Events = require('../enums/events'),
    PubSub = require('pubsub-js');

module.exports = {
    componentWillMount: function() {
        var self = this;

        this.setState({
            visible: false
        });

        this.eventPageChanged = PubSub.subscribe(Events.PAGE.CHANGED, function(event, page){
            var visibility = page === self.state.id;
            self.setState({visible: visibility});
        });
    },
    baseRenderer: function(page, failure){
        if (this.state.visible){
            return page;
        } else {
            return failure || null;
        }
    },
    componentWillUnmount: function() {
        PubSub.unsubscribe(this.eventPageChanged);
    }
}
