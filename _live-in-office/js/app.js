var persons = [
{
    name: 'Людмина',
    surname: 'Абрикосовая'
},
{
    name: 'Ольга',
    surname: 'Черника'
}];

var Hello = React.createClass({
    getInitialState: function() {
        return {
            clicked_count: 0
        }
    },
    wasClicked: function() {
        var rc_that = this;
        this.setState({
            clicked_count: ++this.state.clicked_count
        }, function() {
            //rc_that.refs.
            /*console.log(rc_that.refs.child_1);
            console.log(rc_that.refs.child_2);*/
            if (rc_that.state.clicked_count % 2 == 0) {
                rc_that.refs.child_0.setState({
                    name: rc_that.refs.child_0.props.name
                });
            }
            else {
                rc_that.refs.child_1.setState({
                    name: rc_that.refs.child_1.props.name
                });
            }
        });
    },
    render: function() {
        var rc_that = this;
        var persons = this.props.persons.map(function(item, index) {
            return (
                <Person ref={'child_' + index} name={item.name} surname={item.surname} key={index} callBackParent={rc_that.wasClicked}/>
            );
        });
        return (
            <div>
                <h2 className="warning">Всего раз нажали на кнопку: {this.state.clicked_count}</h2>
                <h1>{this.props.msg}</h1>
                {persons}
            </div>
        );
    }
});

var Person = React.createClass({
    getInitialState: function() {
        return {
            name: this.props.name,
            surname: this.props.surname,
        }
    },
    btnClick: function() {
        //this.props.name += ' _';
        var new_name = this.state.name;
        this.setState({
            name: new_name + '?'
        });
        this.state.name += ' !';
        this.props.callBackParent();
    },
    render: function() {
        return (
            <div>
                {/*Правильный комментарий*/}
                Меня зовут {this.state.name + ' ' + this.state.surname} <br/>
                Старые ФИО {this.props.name + ' ' + this.props.surname}
                <input type="button" value="Нажми на меня!" onClick={this.btnClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <Hello persons={persons} msg="Hello, world!"/>,
    document.getElementsByClassName('js-react')[0]
);