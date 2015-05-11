(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    //接入的平台配置
    platforms: [
    {
        key: 'recommend',
        title: '推荐平台',
        url: 'recommend/index.html',
        menus: [
        {
           key: 'pushrate',
           title: '下发率',
           url: 'pushrate.html',
           subMenus: []
        }
        ,{
           key: 'pvAuv',
           title: 'pv和uv',
           url: 'pvAuv.html',
           subMenus: [] 
        }
        ,{
           key: 'robustOserver',
           title: '服务健壮性',
           url: 'robustOserver.html',
           subMenus: [] 
        }
        ,{
           key: 'robustOngnix',
           url: 'robustOngnix.html',
           title: 'ngnix健壮性',
           subMenus: []
        }]
    } 
    ,{
        key: 'rubbish',
        title: '垃圾管理平台',
        url: 'rubbish/index.html'
    }]
};


},{}],2:[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
    getDefaultProps: function() {
        return {
            className: '',
            data: {
                title: 'XX平台'
            }
        }
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("a", {href: "#", className: "logo"}, 
                    React.createElement("div", {className: "logos"}), 
                    React.createElement("h2", {className: "brand"}, this.props.data.title)
                ), 
                React.createElement("div", {className: "topbar"}, 
                    React.createElement("i", {className: "switch_menu"}, 
                        React.createElement("i", {className: "icon-reorder"})
                    )
                )
            )
        )
    }
});

module.exports = Header;


},{}],3:[function(require,module,exports){
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


},{}],4:[function(require,module,exports){
var config = require('../config').platforms;

var LeftNav = require('../controllers/LeftNav');
var Header = require('../controllers/Header');

var key = 'recommend';
var _config = config.filter(function(item) {
    return  (item.key === key ? true : false);
})[0];

var _header = {
    title: _config.title
};

var _leftNav = _config.menus;

React.render(
React.createElement(Header, {data: _header}),
document.getElementById('header')
);

React.render(
React.createElement(LeftNav, {data: _leftNav}),
document.getElementById('navigator')
);

},{"../config":1,"../controllers/Header":2,"../controllers/LeftNav":3}]},{},[4]);
