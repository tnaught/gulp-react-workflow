var ListItem = React.createClass({
    getDefaultProps: function() {
        return {
            data: {},
            config: []
        }
    },
    format: function(value, type) {
        if(value === undefined) {
            return '数据缺失';
        }
        var re = '';
        switch(type) {
            case 'number': 
            re = parseInt(value, 10) | 0;
            break;
            case 'date':
            re = new Date(value).toString();
            break;
            default:
            re = value.toString();
            break;
        }
        return re;
    },
    render: function() {
        return (
            <tr>
            {
                this.props.config.map(function(item) {
                    var va = this.format(this.props.data[item.key], item.type);
                    return <td class="text-center">{va}</td>
                }.bind(this))
            }
            </tr>
        )
    }
});

var Table = React.createClass({
    getDefaultProps: function() {
        return {
            header: [
                {key:"title1", title:'表头1', type: 'number', sort: 'true'},
                {key:"title2", title:'表头2', type: 'date', sort: 'false'},
                {key:"title3", title:'表头3', type: 'percent', sort: 'true'},
                {key:"title4", title:'表头4', type: 'default', sort: 'false'},
                {key:"title5", title:'表头5', type: 'long', sort: 'false'}
            ]
        }
    },
    getInitialState: function() {
        return {
            data: [
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4},
                {title1:1,title2:2,title3:3,title4:4}
            ]
        }
    },
    renderHeader: function() {

    },
    render: function() {
        return (
            <table className="table table-bordered table-striped table-hover text-center">
                <thead><tr>
                {
                    this.props.header.map(function(item) {
                        <td className={item.sort?"sortable":""}>{item.title}</td>
                    })
                }
                </tr></thead>
                <tbody>
                    {
                        this.state.data.map(function(item){
                            return <ListItem data={item} config={this.props.header}/>
                        }.bind(this))
                    }
                </tbody>
            </table>
        )
    }
});

var Search = React.createClass({
    render: function() {
        return ''
    }
})

var RateOpush = React.createClass({
    render: function() {
        return (
        <div className="container-fluid" id="outer-container">
            <div className="panel searchContainer">
                <div className="panel-body">
                    <div className="form-group col-sm-3">
                        <label htmlFor="pkg">pkg</label>
                        <input className="form-control" id="pkg" placeholder="应用"/>
                    </div>
                </div>
            </div>
            <div className="panel">
                <div className="panel-body"><Table></Table></div>
            </div>
        </div>
        )
    }
})

module.exports = RateOpush
