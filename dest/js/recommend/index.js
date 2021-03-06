(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    platforms: [
    {
        key: 'recommend',
        title: '推荐平台',
        url: 'recommend/index.html',
        menus: [
        {
           key: 'link1',
           title: '链接1',
           url: 'index.html',
           subMenus: []
        }
        ,{
           key: 'link2',
           title: '链接2',
           url: 'link2.html',
           subMenus: []
        }
        ,{
           key: 'folder1',
           title: '一级目录',
           subMenus: [{
                key: 'link3',
                title: '链接3',
                url: 'link3.html',
                subMenus: []
           },
           {
                key: 'link4',
                title: '链接4',
                url: 'link4.html',
                subMenus: []
           }]
        }]
    }]
};


},{}],2:[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
    getDefaultProps: function() {
        return {
            className: '',
            data: {
                title: 'XX平台'
            },
        }
    },
    toggleMenu: function() {
        $('body').toggleClass('fullscreen');
    },
    render: function() {
        return (
            React.createElement("header", {id: "header"}, 
                React.createElement("a", {href: "#", className: "logo"}, 
                    React.createElement("div", {className: "logos"}), 
                    React.createElement("h2", {className: "brand"}, this.props.data.title)
                ), 
                React.createElement("div", {className: "topbar"}, 
                    React.createElement("i", {className: "switch_menu icon-btn", onClick: this.toggleMenu}, 
                        React.createElement("i", {className: "fa fa-reorder"})
                    )
                )
            )
        )
    }
});

module.exports = Header;


},{}],3:[function(require,module,exports){
var Header = require('./Header');
var LeftNav = require('./LeftNav');
var config = require('../config').platforms;

var Layout = React.createClass({displayName: "Layout",
    getDefaultProps: function() {
        return {
            key: 'recommend',
            body: '<h1>Hello World</h1>'
        }
    },
    render: function() {
        var key = this.props.key;
        var _config = config.filter(function(item) {
            return  (item.key === key ? true : false);
        })[0];

        var _header = {
            title: _config.title
        };

        var _leftNav = _config.menus;

        return (
            React.createElement("div", null, 
                React.createElement(Header, {ref: "header", data: _header}), 
                React.createElement("section", {ref: "mainContent", id: "main-content"}), 
                React.createElement(LeftNav, {ref: "navigator", data: _leftNav})
            )
        )
    },
    componentDidMount: function() {
        React.render(React.createElement(this.props.body), React.findDOMNode(this.refs.mainContent));
    }
});

module.exports = Layout;


},{"../config":1,"./Header":2,"./LeftNav":4}],4:[function(require,module,exports){
var LeftNav = React.createClass({displayName: "LeftNav",
    getDefaultProps: function() {
        return {
            title: '11',
            data: []
        }
    },
    isActive: function(url) {
        var pathname = window.location.pathname;
        return (new RegExp(url).test(pathname));
    },
    render: function() {
        return (
            React.createElement("aside", {id: "navigator"}, 
                React.createElement("i", {className: "nav-placeholder"}), 
                React.createElement("i", {className: "logo-placeholder"}), 
                React.createElement("ul", {className: "nav"}, 
                    
                        this.props.data.map(function(menu) {
                            if(menu.subMenus && menu.subMenus.length > 0) {
                                return (
                                    React.createElement("li", {className: "unfold"}, 
                                        React.createElement("a", {className: "nav-title", href: "javascript:;"}, React.createElement("i", {className: "fa fa-file"}), React.createElement("span", {className: "title"}, menu.title), React.createElement("i", {className: "array icon-double-angle-right"})), 
                                        React.createElement("ul", {className: "sub-nav", style: {display:"block"}}, 
                                            
                                                menu.subMenus.map(function(sub) {
                                                    return (
                                                        React.createElement("li", {className: this.isActive(sub.url) ? " active" : ""}, React.createElement("a", {className: "nav-link", href: sub.url}, React.createElement("span", {className: "title"}, sub.title)))
                                                    )
                                                }.bind(this))
                                            
                                        )
                                    ))
                            }
                            else {
                                return React.createElement("li", {className: this.isActive(menu.url) ? " active" : ""}, React.createElement("a", {className: "nav-link", href: menu.url}, React.createElement("i", {className: "fa fa-sign-blank"}), React.createElement("span", {className: "title"}, menu.title)))  
                            }
                        }.bind(this))
                    
                )
            )
        )
    }
});

module.exports = LeftNav;


},{}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
var Layout = require('../controllers/Layout');
var body = require('./RateOpush');

React.render(
React.createElement(Layout, {key: "recommend", body: body})
,document.body);

},{"../controllers/Layout":3,"./RateOpush":5}]},{},[6]);
