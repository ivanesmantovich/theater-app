import React from "react";
import Nav from "./Nav";
import LogSign from "./NavSignUpLogIn";

type LayoutType = {
  children: any;
};

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className="grid md:grid-cols-4 text-gray-700 font-body">
      <Nav />

      <main className={"md:col-span-3 px-16 py-6 bg-gray-100"}>
        <LogSign />
        {children}
      </main>
    </div>
  );
};

export default Layout;
