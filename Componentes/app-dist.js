"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardImage = function CardImage(props) {
  return React.createElement(
    "div",
    { "class": "card-image" },
    React.createElement("img", { src: props.content.url }),
    React.createElement(
      "span",
      { "class": "card-title" },
      props.content.title
    )
  );
};

var CardContent = function CardContent(props) {
  return React.createElement(
    "div",
    { "class": "card-content" },
    React.createElement(
      "p",
      null,
      props.content.contentCard
    )
  );
};

var CardFooter = function CardFooter(props) {
  return React.createElement(
    "div",
    { "class": "card-action" },
    React.createElement(
      "a",
      { href: "#" },
      props.content.footer
    )
  );
};

var NewCard = function NewCard(props) {
  return React.createElement(
    "div",
    { "class": "col s12 m6" },
    React.createElement(
      "div",
      { "class": "card" },
      React.createElement(CardImage, { content: props.content }),
      React.createElement(CardContent, { content: props.content }),
      React.createElement(CardFooter, { content: props.content })
    )
  );
};

var ConsContent = function ConsContent(url, title, contentCard, footer) {
  _classCallCheck(this, ConsContent);

  this.url = url;
  this.title = title;
  this.contentCard = contentCard;
  this.footer = footer;
};
// // Array of objects that contain the information the cards


var content = [];

var Cards = function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards(props) {
    _classCallCheck(this, Cards);

    // this.state = {
    //   content: content
    // };
    var _this = _possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).call(this, props));

    _initialiseProps.call(_this);

    return _this;
  }

  _createClass(Cards, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(
            "div",
            { "class": "col s12 m12 flow-text center-align my-5" },
            React.createElement(
              "h1",
              { "class": "h1" },
              "Cards"
            )
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "col s12 m12 l4" },
              React.createElement(
                "div",
                { "class": "input-field pl-0 col s12" },
                React.createElement("input", { id: "title", type: "text", "class": "validate" }),
                React.createElement(
                  "label",
                  { "for": "title" },
                  "Title"
                )
              ),
              React.createElement(
                "div",
                { "class": "input-field pl-0 col s12" },
                React.createElement("input", { id: "content", type: "text", "class": "validate" }),
                React.createElement(
                  "label",
                  { "for": "content" },
                  "Content"
                )
              ),
              React.createElement(
                "div",
                { "class": "input-field pl-0 col s12" },
                React.createElement("input", { id: "footer", type: "text", "class": "validate" }),
                React.createElement(
                  "label",
                  { "for": "footer" },
                  "Footer"
                )
              ),
              React.createElement(
                "div",
                { "class": "input-field pl-0 col s12" },
                React.createElement("input", { id: "img", type: "file", "class": "validate" })
              ),
              React.createElement(
                "a",
                { onClick: this.AddCard, "class": "waves-effect mt-5 waves-light btn" },
                "Add Card"
              )
            ),
            React.createElement(
              "div",
              { "class": "col s12 m12 l8" },
              React.createElement("div", { id: "container", "class": "row" })
            )
          )
        )
      );
    }
  }]);

  return Cards;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  this.AddCard = function () {
    try {
      var name = document.querySelector("#img").files[0].name;
      var url = "img/" + name;
    } catch (error) {
      var url = "img/481234-PGFQZM-430.jpg";
    }
    var title = document.querySelector("#title").value;
    var contentCard = document.querySelector("#content").value;
    var footer = document.querySelector("#footer").value;
    var x = new ConsContent(url, title, contentCard, footer);
    // this.setState({
    //   content: content[x]
    // })

    content.push(x);
    var ElementCard = function ElementCard(props) {
      var ListCards = props.list.map(function (content, i) {
        return React.createElement(NewCard, { content: content, key: i });
      });
      return ListCards;
    };
    ReactDOM.render(React.createElement(ElementCard, { list: content }), document.getElementById('container'));
  };
};

ReactDOM.render(React.createElement(Cards, null), document.getElementById('app'));
var ElementCard = function ElementCard(props) {
  var ListCards = props.list.map(function (content, i) {
    return React.createElement(NewCard, { content: content, key: i });
  });
  return ListCards;
};
ReactDOM.render(React.createElement(ElementCard, { list: content }), document.getElementById('container'));