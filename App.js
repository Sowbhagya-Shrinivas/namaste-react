import ReactDOM from "react-dom/client";
import React from "react";

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React Functional Component - return some JSX element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namster React using JSX
  </h1>
);
//Component Composition = Component inside Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>Namaste React Functional Component</h1>
  </div>
);
root.render(<HeadingComponent/>);