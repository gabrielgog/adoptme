import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Haruna",
      animal: "Bingo",
      breed: "piedpipper",
    }),
    React.createElement(Pet, { name: "Shafi", animal: "Dog", breed: "latino" }),
    React.createElement(Pet, { name: "Leo", animal: "fire", breed: "wela" }),
  ]);
};
// eslint-disable-next-line no-undef
ReactDOM.render(React.createElement(App), document.getElementById("root"));
