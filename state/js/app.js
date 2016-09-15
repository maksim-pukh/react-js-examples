var elements = [1, 6, 3, 42, -38.16];

var Element = React.createClass({
    render: function() {
        return (
            <div className='number'>
                {this.props.value}
            </div>
        );
    }
});

var Elements = React.createClass({
    getInitialState: function() {
        return {
           elements: this.props.elements
        };
    },
    // listener на кнопку добавления элемента
    addElem: function() {
       var new_number = prompt('Введите значение новго элемента');
        // элемент добавлен в массив, однако React пока не видит изменений
        // необходимо будет воспользоваться методом setState, чтобы врести изменения
        this.state.elements.push(new_number);
        this.setState({
            elements: this.state.elements
        });
    },
    render: function() {
        var rc_elements = this.state.elements.map(function(item, index) {
            return (
                <Element key={index} value={item}/>
            );
        });
        return (
            <div className='root-class'>
                {rc_elements}
                <input type='button' value='Добавить элемент' onClick={this.addElem} />
            </div>
        );
    }
});

ReactDOM.render(
    <Elements elements={elements}/>,
    document.getElementsByClassName('js-react')[0]
);
