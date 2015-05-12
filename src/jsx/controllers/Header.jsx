var Header = React.createClass({
    getDefaultProps: function() {
        return {
            className: '',
            data: {
                title: 'XX平台'
            },
        }
    },
    toggleMenu: function() {
        $('body').toggleClass('fullscreen');
    },
    render: function() {
        return (
            <header id="header">
                <a href="#" className="logo">
                    <div className="logos"></div>
                    <h2 className="brand">{this.props.data.title}</h2>
                </a>
                <div className="topbar">
                    <i className="switch_menu icon-btn" onClick={this.toggleMenu}>
                        <i className="fa fa-reorder"></i>
                    </i>
                </div>
            </header>
        )
    }
});

module.exports = Header;
