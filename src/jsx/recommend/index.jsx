var Layout = require('../controllers/Layout');
var body = require('./RateOpush');

React.render(
<Layout key='recommend' body={body}/>
,document.body);