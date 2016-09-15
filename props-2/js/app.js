var numbers = [1, 6, 3, 42, -38.16];

var Number = React.createClass({
    render: function() {
        return (
            <div className='number'>
                {this.props.value}
            </div>
        );
    }
});

var Numbers = React.createClass({
    render: function() {
        var rc_numbers = this.props.numbers.map(function(item, index) {
            return (
                // При задании коллекции элементов необходимо указывать уникальный ключ key,
                // иначе React будет выдавать ошибку в консоли
                <Number key={index} value={item}/>
            );
        });
        return (
            <div className='root-class'>
                {rc_numbers}
            </div>
        );
    }
});

ReactDOM.render(
    <Numbers numbers={numbers}/>,
    document.getElementsByClassName('js-react')[0]
);
