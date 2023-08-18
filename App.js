{
  /* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */
}

import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement("h1", { key: 1 }, "I'm niraj"),
    React.createElement("h2", { key: 2 }, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child1", key: 2 }, [
    React.createElement("h1", { key: 3 }, "I'm h1 tag"),
    React.createElement("h2", { key: 4 }, "I'm h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
