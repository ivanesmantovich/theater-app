import React from "react";

type TheaterType = {};

export const Theater: React.FC<TheaterType> = (props) => {
  return (
    <div className="grid md:grid-cols-4 text-gray-700 font-body">
      <div className={"md:col-span-1 md:flex md:justify-end"}>
        <nav className={"text-right"}>
          <div className={"flex justify-between items-center"}>
            <h1
              className={
                "font-bold text-purple-700 hover:text-purple-900 uppercase p-4 border-b border-gray-100"
              }
            >
              <a className={"text-xl"} href="/">
                Theater App
              </a>
            </h1>

            {/*Добавить работоспособность menuToggle в реакте*/}
            <div id={"menuToggle"} className={"md:hidden px-4 cursor-pointer"}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>

          <ul
            id={"menu"}
            className={"hidden md:block mt-6 text-xl text-gray-600"}
          >
            <li
              className={
                "font-bold py-1 border-r-4 border-purple-700 hover:text-gray-900"
              }
            >
              <a className={"px-4 flex justify-end"} href="#">
                <span>Home</span>
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>
            </li>
            {/*Добавлять border-r-4 border-purple-700 при выборе*/}
            <li
              className={
                "font-bold py-1 hover:text-gray-900 border-r-4 border-white"
              }
            >
              <a className={"px-4 flex justify-end"} href="#">
                <span>My Profile</span>
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </li>
            {/*Добавлять border-r-4 border-purple-700 при выборе*/}
            <li
              className={
                "font-bold py-1 hover:text-gray-900 border-r-4 border-white"
              }
            >
              <a className={"px-4 flex justify-end"} href="#">
                <span>My Tickets</span>
                <svg
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className={"md:col-span-3 px-16 py-6 bg-gray-100"}>
        <div className={"flex justify-center md:justify-end"}>
          <a className={"button transition-colors"} href="#">
            Log in
          </a>
          <a className={"button ml-2 transition-colors"} href="#">
            Sign up
          </a>
        </div>

        <header>
          <h2 className={"text-6xl text-purple-700 font-semibold"}>Films</h2>
          <h3 className={"text-2xl font-semibold"}>
            For <span className={"text-purple-700"}>Film-buffs</span>
          </h3>
        </header>

        <div>
          <h4 className={"font-bold mt-12 pb-2 border-b border-gray-200"}>
            Latest
          </h4>

          <div className={"mt-8 grid lg:grid-cols-3 gap-10"}>
            {/*/!*cards*!/ То, что выходит за пределы карточки прячется за счет overflow-hidden*/}

            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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
            Most Popular
          </h4>
          <div className={"mt-8"}>
            {/*cards*/}
            <div className={"card hover:shadow-xl transition-shadow"}>
              <img className={"image"} src="img/donnie.jpg" alt="donnie" />
              <div className={"m-4"}>
                <span className={"font-bold"}>Donnie Darko</span>
                <span className={"block text-gray-500 text-sm"}>
                  Richard Kelly
                </span>
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

        <div className={"flex justify-center"}>
          <div
            className={
              "button mt-12 transform hover:scale-125 transition duration-300"
            }
          >
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
};
