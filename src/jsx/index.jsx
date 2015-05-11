/**
 *首页
**/
var config = require('./config');
var Platforms = require('./controllers/Platforms');

var _platforms = config.platforms || [];
React.render(
<Platforms data = {_platforms}/>,
document.body);