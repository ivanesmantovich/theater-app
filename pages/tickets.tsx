import React from "react";
import Nav from "../components/Nav";
import LogSign from "../components/LogSign";

type ticketsType = {};

export const Tickets = ({}: ticketsType) => {
  return (
    <div className="grid md:grid-cols-4 text-gray-700 font-body">
      <Nav />

      <main className={"md:col-span-3 px-16 py-6 bg-gray-100"}>
        <LogSign />

        <header>
          <h2 className={"text-6xl text-purple-700 font-semibold"}>
            Your Tickets
          </h2>
        </header>
      </main>
    </div>
  );
};

export default Tickets;
