var Header = require('./Header');
var LeftNav = require('./LeftNav');
var config = require('../config').platforms;

var Layout = React.createClass({
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
            <div>
                <Header ref="header" data={_header}></Header>
                <section ref="mainContent" id="main-content"></section>
                <LeftNav ref="navigator" data={_leftNav}></LeftNav>
            </div>
        )
    },
    componentDidMount: function() {
        React.render(React.createElement(this.props.body), React.findDOMNode(this.refs.mainContent));
    }
});

module.exports = Layout;
