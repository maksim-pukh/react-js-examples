var foo = 3;

var bar = 5;

var Numbers = React.createClass({
    render: function () {
        return (
            <div className='root-class'>
                {/*в render комментарии заключается {/*в скобки*/} */}
                <div>Сумма чисел = {this.props.number_one + this.props.number_two}</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Numbers number_one={foo} number_two={bar}/>,
    document.getElementsByClassName('js-react')[0]
);
var bar = 5;

var Numbers = React.createClass({
    render: function () {
        return (
            <div className='root-class'>
                <div>Сумма чисел = {this.props.number_one + this.props.number_two}</div>
            </div>
        );
    }
});

ReactDOM.render(
    // инициализация Numbers.props
    <Numbers number_one={foo} number_two={bar}/>,
    document.getElementsByClassName('js-react')[0]
);
