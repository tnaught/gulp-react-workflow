var Header = React.createClass({
    getDefaultProps: function() {
        return {
            className: '',
            data: {
                title: 'XX平台'
            }
        }
    },
    render: function() {
        return (
            <div>
                <a href="#" className="logo">
                    <div className="logos"></div>
                    <h2 className="brand">{this.props.data.title}</h2>
                </a>
                <div className="topbar">
                    <i className="switch_menu">
                        <i className="icon-reorder"></i>
                    </i>
                </div>
            </div>
        )
    }
});

module.exports = Header;
