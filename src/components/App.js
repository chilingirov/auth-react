import React from "react";
import Header from "./Header";
import "./App.css";

export default ({ children }) => {
  return (
    <div className="home">
      <Header />
      {children}
    </div>
  );
};
