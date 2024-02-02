import  ReactDOM from "react-dom/client";
import React from "react";

//React.createElement is a javascript object
//render converting h1 object and put it in DOM

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Nested Structure in React"),
//          React.createElement("h1",{},"Array of Element for the same level")],
//     )
// );
// root.render(parent);

//React.createElement - creates an object - when we render its element onto DOM then it becomes HTML element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);


//JSX - Javascript syntax, it is html like or xml  like syntax
// JSX (transpiled before it reaches the JS Engine)

//transpile means, JSX is converted to the code which browser can understand
// transpiling is done by Babel, which is inside PARCEL, PARCEL will give to the package-babel
const jsxHeading = <h1 id="heading"> Namaste React using JSX</h1>;
console.log(jsxHeading);
root.render(jsxHeading);

