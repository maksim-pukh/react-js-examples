var elements_id = [1, 3, 1];
var elements_list = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 5
    },
    {
        id: 4,
        value: 7
    },
    {
        id: 5,
        value: 11
    }
];

var Element = React.createClass({
    getInitialState: function() {
        return {
            selected_id: this.props.element.elem_id
        };
    },
    valueChange: function(e) {
        /*var rc_that = this;
        this.setState({
            selected_id: e.target.value
        }, function() {
            rc_that.props.callBackParent(e.target);
        });*/
        this.props.callBackParent(e.target.value, this.props.element.item_id);
    },
    render: function() {
        var options = this.props.elements_list.map(function(item, index) {
            return (
                <option key={index + 1} value={item.id}>{ item.value}</option>
            );

            options.unshift(
                <option key="0" value="-1">Значение не выбрано</option>
            );
        });
        return (
            <div className='number'>
                <select type="text" value={this.state.selected_id} onChange={this.valueChange}>
                    {options}
                </select>
            </div>
        );
    }
});

var Elements = React.createClass({
    getInitialState: function() {
        var initial_elements = [];
        var rc_that = this;
        _.forEach(this.props.elements_id, function(id_item, id_index) {
            /*var elem = _.findLast(rc_that.props.elements_list, function(list_item) {
                return (list_item.id === id_item);
            });*/
            var elem = elementSearchByItemId(rc_that.props.elements_list, id_item);
            initial_elements.push({
                elem_id: elem.id,
                item_id: id_index,
                value: elem.value
            });
        });
        return {
            elements: initial_elements,
            sum: _.sumBy(initial_elements, function(item) {
                return (item.value);
            })
        };
    },
    changeChildElem: function(elem_id, item_id) {
        /*var rc_that = this;
        console.log(rc_that.refs);
        var _sum = 0;
        _.forEach(rc_that.refs, function(item, index) {
            console.log(item);
                _sum += _.findLast(rc_that.props.elements_list, function(list_item) {
                    return (list_item.id === item.state.selected_id);
                });
        });
        this.setState({
            sum: _sum
        });*/
        console.log('item_id: ' + item_id + ' elem_id: ' + elem_id);
        var rc_that = this;
        this.setState({
            elements: this.state.elements.map(function(element) {
                if (element.item_id == item_id) {
                    var elem = elementSearchByItemId(rc_that.props.elements_list, elem_id);
                    return {
                        elem_id: elem.id,
                        item_id: item_id,
                        value: elem.value
                    };
                }
                return element;
            })
        });
    },
    addElem: function() {
       var new_number = prompt('Введите значение новго элемента');
        this.state.elements.push(new_number);
        this.setState({
            elements: this.state.elements
        });
    },
    render: function() {
        var rc_that = this;
        var rc_elements = this.state.elements.map(function(item, index) {
            return (
                <Element key={index} ref={"Element_" + index} element={item} elements_list={rc_that.props.elements_list} callBackParent={rc_that.changeChildElem}/>
            );
        });
        return (
            <div className='root-class'>
                <h1> Cумма = {this.state.sum}</h1>
                {rc_elements}
                <input type='button' value='Добавить элемент' onClick={this.addElem} />
            </div>
        );
    }
});

ReactDOM.render(
    <Elements elements_id={elements_id} elements_list={elements_list}/>,
    document.getElementsByClassName('js-react')[0]
);

function elementSearchByItemId(list, id) {
    return  _.findLast(list, function(list_item) {
        return (list_item.id == id);
    });
}