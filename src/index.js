import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Card from "./Card";
import Nav from "./Nav";
import data from "./Data";

ReactDOM.render(
  <div>
    <Nav />
    {data.map((tech) => (
      <Card title={tech.title} imgsrc={tech.imgsrc} link={tech.link} />
    ))}
  </div>,
  document.getElementById("root")
);
