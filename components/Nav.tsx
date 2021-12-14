import React, { useContext } from 'react';
import Link from 'next/link';
import { FirebaseAuthContext } from '../store/auth-context';

type NavType = {};

export const Nav = ({}: NavType) => {
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;

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
              'font-bold py-1 border-r-4 border-purple-700 hover:text-gray-900 hover:cursor-pointer'
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
          {userId !== null && (
            <li
              className={
                'font-bold py-1 hover:text-gray-900 border-r-4 border-white hover:cursor-pointer'
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
          )}
          {/*Добавлять border-r-4 border-purple-700 при выборе*/}
          {userId !== null && (
            <li
              className={
                'font-bold py-1 hover:text-gray-900 border-r-4 border-white hover:cursor-pointer'
              }
            >
              <Link href={'/sessions'}>
                <span className={'px-4 flex justify-end'}>
                  <span>Sessions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
