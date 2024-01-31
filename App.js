const heading = React.createElement("h1", { id: "heading" }, "Hello World! from React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React.createElement is a javascript object
//render converting h1 object and put it in DOM

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Nested Structure in React"),
         React.createElement("h1",{},"Array of Element for the same level")],
    )
);
root.render(parent);