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


},{}]},{},[3]);
