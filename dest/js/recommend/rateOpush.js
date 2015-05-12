(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ListItem = React.createClass({displayName: "ListItem",
    getDefaultProps: function() {
        return {
            data: {},
            config: []
        }
    },
    format: function(value, type) {
        if(value === undefined) {
            return '数据缺失';
        }
        var re = '';
        switch(type) {
            case 'number': 
            re = parseInt(value, 10) | 0;
            break;
            case 'date':
            re = new Date(value).toString();
            break;
            default:
            re = value.toString();
            break;
        }
        return re;
    },
    render: function() {
        return (
            React.createElement("tr", null, 
            
                this.props.config.map(function(item) {
                    var va = this.format(this.props.data[item.key], item.type);
                    return React.createElement("td", {class: "text-center"}, va)
                }.bind(this))
            
            )
        )
    }
});

var Table = React.createClass({displayName: "Table",
    getDefaultProps: function() {
        return {
            header: [
                {key:"title1", title:'表头1', type: 'number', sort: 'true'},
                {key:"title2", title:'表头2', type: 'date', sort: 'false'},
                {key:"title3", title:'表头3', type: 'percent', sort: 'true'},
                {key:"title4", title:'表头4', type: 'default', sort: 'false'},
                {key:"title5", title:'表头5', type: 'long', sort: 'false'}
            ]
        }
    },
    getInitialState: function() {
        return {
            data: [
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4}
            ]
        }
    },
    renderHeader: function() {

    },
    render: function() {
        return (
            React.createElement("table", {className: "table table-bordered table-striped table-hover text-center"}, 
                React.createElement("thead", null, React.createElement("tr", null, 
                
                    this.props.header.map(function(item) {
                        React.createElement("td", {className: item.sort?"sortable":""}, item.title)
                    })
                
                )), 
                React.createElement("tbody", null, 
                    
                        this.state.data.map(function(item){
                            return React.createElement(ListItem, {data: item, config: this.props.header})
                        }.bind(this))
                    
                )
            )
        )
    }
});

var Search = React.createClass({displayName: "Search",
    render: function() {
        return ''
    }
})

var RateOpush = React.createClass({displayName: "RateOpush",
    render: function() {
        return (
        React.createElement("div", {className: "container-fluid", id: "outer-container"}, 
            React.createElement("div", {className: "panel searchContainer"}, 
                React.createElement("div", {className: "panel-body"}, 
                    React.createElement("div", {className: "form-group col-sm-3"}, 
                        React.createElement("label", {htmlFor: "pkg"}, "pkg"), 
                        React.createElement("input", {className: "form-control", id: "pkg", placeholder: "应用"})
                    )
                )
            ), 
            React.createElement("div", {className: "panel"}, 
                React.createElement("div", {className: "panel-body"}, React.createElement(Table, null))
            )
        )
        )
    }
})

module.exports = RateOpush


},{}]},{},[1]);
