var HelloWorld = require('./HelloWorld');

var _modules = [
    "gulp",
    "react",
    "browserify",
    "compass",
    "uglify",
    "minify-css"
];

React.render(<HelloWorld modules={_modules}/>, document.body);