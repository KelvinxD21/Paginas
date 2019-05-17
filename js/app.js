function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Kelvin',
    lastName: 'Arias'
  };
  
  const element = <h1>Hello, {formatName(user)}! </h1>;
  
  ReactDOM.render(
    element,
    document.getElementById('app')
  );