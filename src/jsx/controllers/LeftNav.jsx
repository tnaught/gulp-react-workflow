var LeftNav = React.createClass({
    getDefaultProps: function() {
        return {
            title: '11',
            data: []
        }
    },
    isActive: function(url) {
        var pathname = window.location.pathname;
        return (new RegExp(url).test(pathname));
    },
    render: function() {
        return (
            <aside id="navigator">
                <i className="nav-placeholder"></i>
                <i className="logo-placeholder"></i>
                <ul className="nav">
                    {
                        this.props.data.map(function(menu) {
                            if(menu.subMenus && menu.subMenus.length > 0) {
                                return (
                                    <li className="unfold">
                                        <a className="nav-title" href="javascript:;"><i className="fa fa-file"></i><span className="title">{menu.title}</span><i className="array icon-double-angle-right"></i></a>
                                        <ul className="sub-nav" style={{display:"block"}}>
                                            {
                                                menu.subMenus.map(function(sub) {
                                                    return (
                                                        <li className={this.isActive(sub.url) ? " active" : ""}><a className="nav-link" href={sub.url}><span className="title">{sub.title}</span></a></li>
                                                    )
                                                }.bind(this))
                                            }
                                        </ul>
                                    </li>)
                            }
                            else {
                                return <li className={this.isActive(menu.url) ? " active" : ""}><a className="nav-link" href={menu.url}><i className="fa fa-sign-blank"></i><span className="title">{menu.title}</span></a></li>  
                            }
                        }.bind(this))
                    }
                </ul>
            </aside>
        )
    }
});

module.exports = LeftNav;
