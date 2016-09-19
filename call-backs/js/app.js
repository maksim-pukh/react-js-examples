// ид элементов, выбранных по умолчнию
var elements_id = [1, 3, 1];

// список доступных элементов
var elements_list = [
    {
        id: 6,
        value: 0
    },
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
        var rc_that = this;
        var new_value = e.target.value;
        this.setState({
            selected_id: new_value
        }, function() {
            // вызов callBack функии с параметрами (см. Elements.changeChildElem)
            rc_that.props.callBackParent(new_value, rc_that.props.element.item_id);
        });

    },
    render: function() {
        var options = this.props.elements_list.map(function(item, index) {
            return (
                <option key={index + 1} value={item.id}>{ item.value}</option>
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
    // после того, как было выбрано другое значение в Element, будет запущена эта функция (см. Element.callBackParent)
    changeChildElem: function(elem_id, item_id) {
        var rc_that = this;
        this.setState({
            // обновление элементов. Если это элемент, значение которого было изменено в потомке, то его значение изменяется и тут
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
        }, function() {
            // после того, как были обновлены elements, необходимо пересчитать сумму
            rc_that.setState({
                sum: _.sumBy(rc_that.state.elements, function(item) {
                    return (item.value);
                })
            });
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
