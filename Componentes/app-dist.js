'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Kelvin',
  lastName: 'Arias'
};

var element = React.createElement(
  'div',
  { 'class': 'container' },
  React.createElement(
    'div',
    { 'class': 'row' },
    React.createElement(
      'div',
      { 'class': 'col-12 text-center my-5' },
      React.createElement(
        'h1',
        { 'class': 'h1' },
        'Hello, ',
        formatName(user),
        '! '
      )
    )
  )
);

ReactDOM.render(element, document.getElementById('app'));