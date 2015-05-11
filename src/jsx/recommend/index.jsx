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
<Header data={_header} />,
document.getElementById('header')
);

React.render(
<LeftNav data={_leftNav} />,
document.getElementById('navigator')
);