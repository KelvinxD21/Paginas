function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Kelvin',
    lastName: 'Arias'
  };
  
  const element = <div class="container">
        <div class="row">
        <div class="col-12 text-center my-5">
            <h1 class="h1">Hello, {formatName(user)}! </h1>
        </div>
        </div>
   </div>
  
  ReactDOM.render(
    element,
    document.getElementById('app')
  );