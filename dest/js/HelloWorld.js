(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Search = React.createClass({displayName: "Search",
    getDefaultProps: function () {
        return {
            onkeyWordChange: function () {}
        }
    },
    inputChangeHandler: function (e) {
        this.props.onkeyWordChange(e.target.value);
    },
    render: function () {
        return React.createElement("input", {onChange: this.inputChangeHandler})
    }
})

var List = React.createClass({displayName: "List",
    getDefaultProps: function () {
        return {
            keyWord: '',
            modules: []
        }
    },
    filter: function (keyWord) {
        return this.props.modules.filter(function (name) {
            return keyWord.length == 0 ? true : name.indexOf(keyWord) >= 0;
        })
    },
    api: function () {

    },
    render: function() {
        return (
            React.createElement("ul", null, 
                this.filter(this.props.keyWord).map(function (name) {
                    return React.createElement("li", {key: name}, name)
                })
            )
        )
    }
})

module.exports = React.createClass({displayName: "exports",
    getInitialState: function () {
        return {keyWord: ""}
    },
    onkeyWordChangeHanlder: function (keyWord) {
        this.setState({keyWord: keyWord});
    },
    userApi: function () {
        this.refs.list.api();
    },
    render: function() {
        return (React.createElement("div", null, React.createElement(Search, {onkeyWordChange: this.onkeyWordChangeHanlder}), React.createElement(List, {ref: "list", modules: this.props.modules, keyWord: this.state.keyWord})))
    }
})



// var Graphic = React.createClass({
//  getInitialState: function () {
//      return {instance: {}}
//  },
//  componentDidMount: function () {        
//      var container = React.findDOMNode(this.refs.container);
//      var instance //........
//      this.setState({instance: instance});
//  },
//  componentWillUnmount: function () {
//      this.state.instance.destroy();
//  },
//  render: function () {
//      return <div ref="container"/>
//  },
//  shouldComponentUpdate: function (nextProp) {
//      return false;
//  },
//  componentWillUpdate: function () {
//      this.componentWillUnmount();
//  },
//  componentDidUpdate: function () {
//      this.componentDidMount();
//  }
// });

},{}]},{},[1]);
