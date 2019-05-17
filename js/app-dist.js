'use strict';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Kelvin',
  lastName: 'Arias'
};

var element = React.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '! '
);

ReactDOM.render(element, document.getElementById('app'));