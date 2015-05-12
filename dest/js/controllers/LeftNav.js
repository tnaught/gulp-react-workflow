(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1]);
