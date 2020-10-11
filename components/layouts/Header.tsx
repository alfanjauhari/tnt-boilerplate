import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';
import config from '~/utils/config';
import useDarkMode from '../helpers/useDarkMode';

const Header: FC = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);
  const { asPath } = useRouter();

  return (
    <>
      <header
        className={
          darkMode
            ? 'flex justify-between items-center bg-gray-800 px-6 md:px-8 py-6 shadow'
            : 'flex justify-between items-center bg-white px-6 md:px-8 py-6 shadow'
        }
      >
        <button
          className={darkMode ? 'bg-gray-800 mr-2 block md:hidden focus:outline-none' : 'bg-white mr-2 block md:hidden focus:outline-none'}
          type="button"
          onClick={() => setShowMenu(prevState => !prevState)}
        >
          {showMenu ? (
            <FiX size="1.5em" className={darkMode ? 'text-white' : 'text-gray-800'} />
          ) : (
            <FiMenu className={darkMode ? 'text-white' : 'text-gray-800'} size="1.5em" />
          )}
        </button>
        <nav className="flex items-center w-auto md:w-full">
          <Link href="/">
            <a href="/">
              <h1
                className={
                  darkMode
                    ? 'font-bold text-xl text-white'
                    : 'font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800'
                }
              >
                {config.TITLE}
              </h1>
            </a>
          </Link>
          <ul
            className={
              darkMode
                ? 'hidden md:flex items-center justify-center text-white flex-grow'
                : 'hidden md:flex items-center justify-center text-gray-800 flex-grow'
            }
          >
            {config.MENU.map(menu => (
              <li className="p-3 rounded" key={menu.path}>
                <Link href={menu.path}>
                  <a href={menu.path} className={menu.path === asPath ? 'active' : ''}>
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={darkMode ? 'bg-gray-800 mr-2 focus:outline-none' : 'bg-white mr-2 focus:outline-none'}
          type="button"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FiSun size="1.5em" className="text-yellow-500 transform hover:rotate-180 duration-300" />
          ) : (
            <FiMoon size="1.5em" className="text-gray-808" />
          )}
        </button>
      </header>
      <nav className={showMenu ? (darkMode ? 'block md:hidden p-6 bg-gray-800 text-white' : 'block md:hidden p-6 bg-white') : 'hidden'}>
        <ul>
          {config.MENU.map(menu => (
            <li className="p-3 rounded" key={menu.path}>
              <Link href={menu.path}>
                <a href={menu.path} className={menu.path === asPath ? 'active' : ''}>
                  {menu.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
