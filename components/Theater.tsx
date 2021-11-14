import React from "react";
import Nav from "./Nav";
import Main from "./Main";

type TheaterType = {};

const Theater = ({}: TheaterType) => {
  return (
    <div className="grid md:grid-cols-4 text-gray-700 font-body">
      <Nav />

      <Main />
    </div>
  );
};

export default Theater;
