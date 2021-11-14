import React from "react";

type LoadMoreType = {};

export const LoadMore = ({}: LoadMoreType) => {
  return (
    <div className={"flex justify-center"}>
      <div
        className={
          "button mt-12 transform hover:scale-125 transition duration-300"
        }
      >
        <div>Load more</div>
      </div>
    </div>
  );
};

export default LoadMore;
