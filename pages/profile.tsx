import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import LogSign from "../components/LogSign";
import BoxOffice from "../components/BoxOffice";
import LoadMore from "../components/LoadMore";

type profileType = {};

export const Profile = ({}: profileType) => {
  return (
    <div className="grid md:grid-cols-4 text-gray-700 font-body">
      <Nav />

      <main className={"md:col-span-3 px-16 py-6 bg-gray-100"}>
        <LogSign />

        <header>
          <h2 className={"text-6xl text-purple-700 font-semibold"}>
            Your Profile
          </h2>
        </header>
      </main>
    </div>
  );
};

export default Profile;
