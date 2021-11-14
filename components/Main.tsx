import React from "react";
import LogSign from "./LogSign";
import BoxOffice from "./BoxOffice";
import LoadMore from "./LoadMore";

type MainType = {};

export const Main = ({}: MainType) => {
  return (
    <main className={"md:col-span-3 px-16 py-6 bg-gray-100"}>
      <LogSign />

      <header>
        <h2 className={"text-6xl text-purple-700 font-semibold"}>Films</h2>
        <h3 className={"text-2xl font-semibold"}>
          For <span className={"text-purple-700"}>Film-buffs</span>
        </h3>
      </header>

      <BoxOffice />

      <LoadMore />
    </main>
  );
};

export default Main;
