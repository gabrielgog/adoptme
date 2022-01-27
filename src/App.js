// eslint-disable-next-line no-undef
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Haruna" animal="Dog" breed="Lation" />
      <Pet name="Haruna" animal="Dog" breed="Lation" />
      <Pet name="Haruna" animal="Dog" breed="Lation" />
    </div>
  );
};

// eslint-disable-next-line no-undef
ReactDOM.render(React.createElement(App), document.getElementById("root"));

