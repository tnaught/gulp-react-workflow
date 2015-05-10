var Search = React.createClass({
	getDefaultProps: function () {
		return {
			onkeyWordChange: function () {}
		}
	},
	inputChangeHandler: function (e) {
		this.props.onkeyWordChange(e.target.value);
	},
	render: function () {
		return <input onChange={this.inputChangeHandler}/>
	}
})

var List = React.createClass({
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
			<ul>
				{this.filter(this.props.keyWord).map(function (name) {
					return <li key={name} style={{top:}}>{name}</li>
				})}
			</ul>
		)
	}
})

module.exports = React.createClass({
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
		onreturn (<div><Search onkeyWordChange={this.onkeyWordChangeHanlder}/><List ref="list" modules={this.props.modules} keyWord={this.state.keyWord}/></div>)
	}
})



var Graphic = React.createClass({
	getInitialState: function () {
		return {instance: {}}
	},
	componentDidMount: function () {		
		var container = React.findDOMNode(this.refs.container);
		var instance //........
		this.setState({instance: instance});
	},
	componentWillUnmount: function () {
		this.state.instance.destroy();
	},
	render: function () {
		return <div ref="container"/>
	},
	shouldComponentUpdate: function (nextProp) {
		return false;
	},
	componentWillUpdate: function () {
		this.componentWillUnmount();
	},
	componentDidUpdate: function () {
		this.componentDidMount();
	}
});