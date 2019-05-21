  

const CardImage = props =>{
  return (
    <div class="card-image">
      <img src={props.content.url} />
      <span class="card-title">{props.content.title}</span>
    </div>
  )
}

const CardContent = props =>{
  return (
    <div class="card-content">
      <p>{props.content.contentCard}</p>
    </div>
  )
}

const CardFooter = props =>{
  return (
    <div class="card-action">
      <a href="#">{props.content.footer}</a>
    </div>
  )
}


const NewCard = props => {
  return(
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <CardImage content={props.content} />
          <CardContent content={props.content} />
          <CardFooter content={props.content} />
        </div>
      </div>
    </div>
  ) 
}

class ConsContent {
  constructor(title,contentCard,footer){
    this.title = title;
    this.contentCard = contentCard;
    this.footer = footer;
  }  
}
// Array of objects that contain the information the cards
let content = [];

class Cards extends React.Component{
  constructor(props){
    super(props);
  }
 

  AddCard = () =>{
      
      let title = document.querySelector("#title").value;
      let contentCard = document.querySelector("#content").value;
      let footer = document.querySelector("#footer").value;
      let x = new ConsContent(title,contentCard,footer);
      content.push(x);
      console.log(content);
      const ElementCard = props =>{
        const ListCards = props.list.map((content,i) => <NewCard content={content} key={i} />);
        return ListCards;
      }
      ReactDOM.render(<ElementCard list={content} />,document.getElementById('container'));
  }

  render(){
    return (
     <div class="container">
        <div class="row">
          <div class="col s12 m12 flow-text center-align my-5">
              <h1 class="h1">Cards</h1>
          </div>
          <div class="row">
            <div class="col s12 m12 l4">
                <div class="input-field pl-0 col s12">
                    <input id="title" type="text" class="validate" />
                    <label for="title">Title</label>
                </div>
                <div class="input-field pl-0 col s12">
                    <input id="content" type="text" class="validate" />
                    <label for="content">Content</label>
                </div>
                <div class="input-field pl-0 col s12">
                    <input id="footer" type="text" class="validate" />
                    <label for="footer">Footer</label>
                </div>
                <div class="input-field pl-0 col s12">
                    <input id="img" type="file" class="validate" />
                </div>
                <a onClick={this.AddCard} class="waves-effect mt-5 waves-light btn">
                       Add Card
                </a>
            </div>
            <div id="container" class="col s12 m12 l8">
            
            </div>
          </div>
        </div>
   </div>
    )
  }
}
ReactDOM.render(
  <Cards />,
  document.getElementById('app')
);
 
 