  

let content = [{
  url : "img/example01.jpg",
  title : "Card Title",
  content : "I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.",
  footer : "This is a link"
}]

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
      <p>{props.content.content}</p>
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

class Cards extends React.Component{
  constructor(props){
    super(props);
  }

  AddCard = () =>{
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
 
 