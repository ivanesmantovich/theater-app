import React from "react";

type LogSignType = {};

export const LogSign = ({}: LogSignType) => {
  return (
    <div className={"flex justify-center md:justify-end"}>
      <a className={"button transition-colors"} href="#">
        Log in
      </a>
      <a className={"button ml-2 transition-colors"} href="#">
        Sign up
      </a>
    </div>
  );
};

export default LogSign;
