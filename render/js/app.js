// обязательно с большой буквы
var Greetings = React.createClass({
    render: function() {
        // какие-нибудь действия

        return (
            // все возвращаемые элементы должны быть обернуты div'ом
            // свойство class html элементов тут задается как className, дабы избежать конфликтов с class из js
            <div className='root-class'>
                <div>Hello, world!</div>
            </div>
        );
    }
});

ReactDOM.render(
    // обязателен закрывающий тег
    <Greetings/>,
    document.getElementsByClassName('js-react')[0]
);