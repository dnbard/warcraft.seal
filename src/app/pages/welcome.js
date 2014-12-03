/** @jsx React.DOM */

var React = require('react'),
    Pages = require('../enums/pages'),
    BasePageMixin = require('./basePageMixin'),
    WelcomePage;

WelcomePage = React.createClass({
    mixins: [ BasePageMixin ],
    getInitialState: function() {
        return {
            id: Pages.WELCOME
        };
    },
    render: function() {
        return this.baseRenderer((
            <div data-page={this.state.id} className="page">
                <div>
                    <h2>Select Fraction</h2>
                    <input type="button" onClick={this.selectAlliance} value="Alliance" />
                    <input type="button" onClick={this.selectHorde} value="Horde" />
                </div>
                <div>
                    <h2>or restore current game</h2>
                </div>
            </div>
        ));
    },
    selectAlliance: function(){
        debugger;
    },
    selectHorde: function(){
        debugger;
    }
});

module.exports = WelcomePage;
