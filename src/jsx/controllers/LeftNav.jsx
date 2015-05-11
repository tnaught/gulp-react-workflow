var LeftNav = React.createClass({
    getDefaultProps: function() {
        return {
            data: []
        }
    },
    render: function() {
        return (
            <div>
                <i className="nav-placeholder"></i>
                <i className="logo-placeholder"></i>
                <ul className="nav">
                    {
                        this.props.data.map(function(menu) {
                            if(menu.subMenus && menu.subMenus.length > 0) {
                                return (
                                    <li className="">
                                        <a className="nav-title" href="javascript:;"><i className="icon-file"></i><span className="title">{menu.title}</span><i className="array icon-double-angle-right"></i></a>
                                        <ul className="sub-nav">
                                            {
                                                menu.subMenus.map(function(sub) {
                                                    return (
                                                        <li><a className="nav-link" href="javascript:;"><span className="title">{sub.title}</span></a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>)
                            }
                            else {
                                return <li><a className="nav-link" href="javascript:;" url="{menu.url}"><i className="icon-sign-blank"></i><span className="title">{menu.title}</span></a></li>  
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
});

module.exports = LeftNav;
