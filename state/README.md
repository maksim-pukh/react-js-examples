# Атрибуты reactElement
### state

> Свойства элемента, которые могут изменяться (в отличии от props). Используются для того, чтобы отслеживать изменения в модели и обновлять DOM. Как только изменятся значения state, изменится и структура DOM, которая описана в свойствах элементов render.
 Могут быть инициализированы при вызове элемента в свойстве getInitialState.

### getInitialState

> Метод, инициализирующий начальные значения свойства state.
Вызывается один раз при инициализации объекта

```
getInitialState: function() {
    return {
        foo: this.props.foo,
        bar: this.props.bar
    };
}
```

### setState

> Метод, задающий значения свойства state.
Вызывается при необходимости поменять свойства state

```
...
this.setState({
    foo: new_foo_value
});
```

В данном примере отображается массив elements. При нажатии кнопки "Добавить элемент",
пользователь вводит произвольное значение, которое добавляется в массив значений.

Пример показывает простое MVC взаимодействие