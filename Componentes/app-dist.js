"use strict";

// FOO


// ELEMENT

var element = React.createElement(
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
                    { "class": "input-field col s12" },
                    React.createElement("input", { id: "title", type: "text", "class": "validate" }),
                    React.createElement(
                        "label",
                        { "for": "title" },
                        "Title"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "input-field col s12" },
                    React.createElement("input", { id: "content", type: "text", "class": "validate" }),
                    React.createElement(
                        "label",
                        { "for": "content" },
                        "Content"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "input-field col s12" },
                    React.createElement("input", { id: "footer", type: "text", "class": "validate" }),
                    React.createElement(
                        "label",
                        { "for": "footer" },
                        "Footer"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "input-field col s4" },
                    React.createElement("input", { id: "img", type: "file", "class": "validate" })
                )
            ),
            React.createElement("div", { "class": "col s12 m12 l8" })
        )
    )
);

// RENDER

ReactDOM.render(element, document.getElementById('app'));