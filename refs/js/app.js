var Container = React.createClass({
    getTime: function() {
        var now = new Date();
        // обращаемся к потомку по имени
        this.refs.my_watch.setState({
            curr_time: now
        });
    },
    render: function() {
        return (
            <div className="b-container">
                {/* задаем имя потомка */}
                <Watch ref="my_watch"/>
                <input type="button" value="Узнать текущее время" onClick={this.getTime} />
            </div>
        );
    }
});

var Watch = React.createClass({
    getInitialState: function() {
        var now = new Date();
        return {
            curr_time: now
        };
    },
    render: function() {
        return (
            <div className="b-container">
                {this.state.curr_time.toLocaleTimeString()}
            </div>
        );
    }
});

ReactDOM.render(
    <Container />,
    document.getElementsByClassName('js-react')[0]
);