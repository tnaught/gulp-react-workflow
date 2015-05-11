var Platform = React.createClass({
    getDefaultProps: function() {
        return {
            data: [],
            className: 'platforms'
        }
    },
    render: function() {
        return (
        <ul className={this.props.className}>
        {
            this.props.data.map(function(platform) {
                return <li><a href={platform.url}>{platform.title}</a></li>
            })
        }
        <li><a href=""><i className="fa fa-plus"></i></a></li>
        </ul>)
    }
});

module.exports = Platform;
