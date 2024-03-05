const WelcomeMessage = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Welcome to ReactJS Project!'),
        React.createElement('p', null, 'This is a simple web page built with ReactJS.'),
        React.createElement('p', null, 'This is a Day 2 Homework')
    );
};

ReactDOM.render(
    React.createElement(WelcomeMessage, null),
    document.getElementById("root")
);

