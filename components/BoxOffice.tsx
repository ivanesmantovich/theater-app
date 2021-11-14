import React from "react";

type BoxOfficeType = {};

export const BoxOffice = ({}: BoxOfficeType) => {
  return (
    <div>
      <h4 className={"font-bold mt-12 pb-2 border-b border-gray-200"}>
        Most popular
      </h4>

      <div className={"mt-8 grid lg:grid-cols-3 gap-10"}>
        {/*/!*cards*!/ То, что выходит за пределы карточки прячется за счет overflow-hidden*/}

        <div className={"card hover:shadow-xl transition-shadow"}>
          <img className={"image"} src="img/donnie.jpg" alt="donnie" />
          <div className={"m-4"}>
            <span className={"font-bold"}>Donnie Darko</span>
            <span className={"block text-gray-500 text-sm"}>Richard Kelly</span>
          </div>
          <div className={"length"}>
            {" "}
            <svg
              className="inline-block w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>1h 53min</span>
          </div>
        </div>
      </div>

      <h4 className={"font-bold mt-12 pb-2 border-b border-gray-200"}>
        Box Office
      </h4>
      <div className={"mt-8"}>
        {/*cards*/}
        <div className={"card hover:shadow-xl transition-shadow"}>
          <img className={"image"} src="img/donnie.jpg" alt="donnie" />
          <div className={"m-4"}>
            <span className={"font-bold"}>Donnie Darko</span>
            <span className={"block text-gray-500 text-sm"}>Richard Kelly</span>
          </div>
          <div className={"length"}>
            <svg
              className="inline-block w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>1h 53min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxOffice;
