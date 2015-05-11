(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var LeftNav = React.createClass({displayName: "LeftNav",
    getDefaultProps: function() {
        return {
            data: []
        }
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("i", {className: "nav-placeholder"}), 
                React.createElement("i", {className: "logo-placeholder"}), 
                React.createElement("ul", {className: "nav"}, 
                    
                        this.props.data.map(function(menu) {
                            if(menu.subMenus && menu.subMenus.length > 0) {
                                return (
                                    React.createElement("li", {className: ""}, 
                                        React.createElement("a", {className: "nav-title", href: "javascript:;"}, React.createElement("i", {className: "icon-file"}), React.createElement("span", {className: "title"}, menu.title), React.createElement("i", {className: "array icon-double-angle-right"})), 
                                        React.createElement("ul", {className: "sub-nav"}, 
                                            
                                                menu.subMenus.map(function(sub) {
                                                    return (
                                                        React.createElement("li", null, React.createElement("a", {className: "nav-link", href: "javascript:;"}, React.createElement("span", {className: "title"}, sub.title)))
                                                    )
                                                })
                                            
                                        )
                                    ))
                            }
                            else {
                                return React.createElement("li", null, React.createElement("a", {className: "nav-link", href: "javascript:;", url: "{menu.url}"}, React.createElement("i", {className: "icon-sign-blank"}), React.createElement("span", {className: "title"}, menu.title)))  
                            }
                        })
                    
                )
            )
        )
    }
});

module.exports = LeftNav;


},{}]},{},[1]);
