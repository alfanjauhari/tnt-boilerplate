import React, { FC } from 'react';
import useDarkMode from '../helpers/useDarkMode';
import Footer from './Footer';
import Header from './Header';

const Main: FC = ({ children }) => {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={darkMode ? 'min-h-screen flex flex-col bg-gray-800 text-white' : 'min-h-screen flex flex-col'}>
      <Header />
      <main className="flex-grow px-6 md:px-8 my-12 md:my-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
