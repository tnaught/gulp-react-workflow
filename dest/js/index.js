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
var Platform = React.createClass({displayName: "Platform",
    getDefaultProps: function() {
        return {
            data: [],
            className: 'platforms'
        }
    },
    render: function() {
        return (
        React.createElement("ul", {className: this.props.className}, 
        
            this.props.data.map(function(platform) {
                return React.createElement("li", null, React.createElement("a", {href: platform.url}, platform.title))
            }), 
        
        React.createElement("li", null, React.createElement("a", {href: ""}, React.createElement("i", {className: "fa fa-plus"})))
        ))
    }
});

module.exports = Platform;


},{}],3:[function(require,module,exports){
/**
 *首页
**/
var config = require('./config');
var Platforms = require('./controllers/Platforms');

var _platforms = config.platforms || [];
React.render(
React.createElement(Platforms, {data: _platforms}),
document.body);

},{"./config":1,"./controllers/Platforms":2}]},{},[3]);
