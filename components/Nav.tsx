import React from 'react';
import Link from 'next/link';

type NavType = {};

export const Nav = ({}: NavType) => {
  return (
    <div className={'md:col-span-1 md:flex md:justify-end'}>
      <nav className={'text-right'}>
        <div className={'flex justify-between items-center'}>
          <h1
            className={
              'font-bold text-purple-700 hover:text-purple-900 uppercase p-4 border-b border-gray-100'
            }
          >
            <Link href={'/'}>
              <span className={'text-xl'}>MovieDate</span>
            </Link>
          </h1>

          {/*Добавить работоспособность menuToggle в реакте*/}
          <div id={'menuToggle'} className={'md:hidden px-4 cursor-pointer'}>
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
          id={'menu'}
          className={'hidden md:block mt-6 text-xl text-gray-600'}
        >
          <li
            className={
              'font-bold py-1 border-r-4 border-purple-700 hover:text-gray-900'
            }
          >
            <Link href={'/'}>
              <span className={'px-4 flex justify-end'}>
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
              </span>
            </Link>
          </li>
          {/*Добавлять border-r-4 border-purple-700 при выборе*/}
          <li
            className={
              'font-bold py-1 hover:text-gray-900 border-r-4 border-white'
            }
          >
            <Link href={'/profile'}>
              <span className={'px-4 flex justify-end'}>
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
              </span>
            </Link>
          </li>
          {/*Добавлять border-r-4 border-purple-700 при выборе*/}
          <li
            className={
              'font-bold py-1 hover:text-gray-900 border-r-4 border-white'
            }
          >
            <Link href={'/tickets'}>
              <span className={'px-4 flex justify-end'}>
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
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
