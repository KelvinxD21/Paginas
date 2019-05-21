"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var content = [{
  url: "img/example01.jpg",
  title: "Card Title",
  content: "I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.",
  footer: "This is a link"
}];

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
      props.content.content
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
    { "class": "row" },
    React.createElement(
      "div",
      { "class": "col s12 m7" },
      React.createElement(
        "div",
        { "class": "card" },
        React.createElement(CardImage, { content: props.content }),
        React.createElement(CardContent, { content: props.content }),
        React.createElement(CardFooter, { content: props.content })
      )
    )
  );
};

var Cards = function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards(props) {
    _classCallCheck(this, Cards);

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
            React.createElement("div", { id: "container", "class": "col s12 m12 l8" })
          )
        )
      );
    }
  }]);

  return Cards;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
  this.AddCard = function () {
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