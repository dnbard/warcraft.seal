/** @jsx React.DOM */

var React = require('react'),
    Pages = require('../enums/pages'),
    BasePageMixin = require('./basePageMixin'),
    AnotherPage;

AnotherPage = React.createClass({
    mixins: [ BasePageMixin ],
    getInitialState: function() {
        return {
            id: 'another'
        };
    },
    render: function() {
        return this.baseRenderer((
            <div data-page={this.state.id} className="page">
                <h2>secondPage</h2>
            </div>
        ));
    }
});

module.exports = AnotherPage;
