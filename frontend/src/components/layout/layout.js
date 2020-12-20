import React from "react";
import Header from "../header/header";

export default function layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
