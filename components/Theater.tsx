import React from "react";
import BoxOffice from "./BoxOffice";
import LoadMore from "./LoadMore";

type TheaterType = {};

const Theater = ({}: TheaterType) => {
  return (
    <>
      <header>
        <h2 className={"text-6xl text-purple-700 font-semibold"}>Films</h2>
        <h3 className={"text-2xl font-semibold"}>
          For <span className={"text-purple-700"}>Film-buffs</span>
        </h3>
      </header>

      <BoxOffice />

      <LoadMore />
    </>
  );
};

export default Theater;
