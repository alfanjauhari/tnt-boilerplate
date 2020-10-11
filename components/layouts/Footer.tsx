import React, { FC } from 'react';
import config from '~/utils/config';
import useDarkMode from '~/components/helpers/useDarkMode';

const Footer: FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className={darkMode ? 'p-8 border-t-1 bg-gray-800 text-white text-center' : 'p-8 border-t-1 bg-white text-center'}>
      &copy; <b>{config.TITLE}</b> - {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
