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
