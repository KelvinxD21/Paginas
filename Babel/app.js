  
  // FOO
  
  
  // ELEMENT

  const element = <div class="container">
        <div class="row">
        <div class="col s12 m12 flow-text center-align my-5">
            <h1 class="h1">Cards</h1>
        </div>
        <div class="row">
          <div class="col s12 m12 l4">
              <div class="input-field col s12">
                  <input id="title" type="text" class="validate"></input>
                  <label for="title">Title</label>
              </div>
              <div class="input-field col s12">
                  <input id="content" type="text" class="validate"></input>
                  <label for="content">Content</label>
              </div>
              <div class="input-field col s12">
                  <input id="footer" type="text" class="validate"></input>
                  <label for="footer">Footer</label>
              </div>
              <div class="input-field col s4">
                  <input id="img" type="file" class="validate"></input>
              </div>
          </div>
          <div class="col s12 m12 l8">
            
          </div>
        </div>
        </div>
   </div>

// RENDER
 
  ReactDOM.render(
    element,
    document.getElementById('app')
  );