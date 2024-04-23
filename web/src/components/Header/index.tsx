import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoIcon from '../../assets/logo.png';

const Header = () => {
  const [navFocus, setNavFocus] = useState('');

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setNavFocus(pathname);
  }, []);

  return (
    <div className="flex items-center justify-between px-10 md:px-4 sm:px-2 shadow-md  shadow-gray-500 bg-purple-400">
      <Link to="/">
        <img className="w-24 md:w-16 sm:w-14" src={logoIcon} />
      </Link>
      <div className="flex items-center text-center text-lg md:text-base sm:text-sm font-bold sm:font-semibold text-white">
        <Link
          className={`h-full px-4 md:px-2 sm:py-2 py-4 transition duration-300 ${
            navFocus == '/projects'
              ? 'bg-white text-purple-400'
              : 'hover:bg-white hover:text-purple-400'
          }`}
          to="/projects"
        >
          Meus Projetos
        </Link>
        <Link
          className={`h-full px-4 md:px-2 sm:py-2 py-4 text-center transition duration-300 ${
            navFocus == '/schedule'
              ? 'bg-white text-purple-400'
              : 'hover:bg-white hover:text-purple-400'
          }`}
          to="/schedule"
        >
          Minha Agenda
        </Link>
      </div>
      <div>
        <p className="text-xl md:text-lg sm:text-base font-bold sm:font-semibold text-white">
          Usuário
        </p>
      </div>
    </div>
  );
};

export default Header;
