import { useContext, useState } from 'react';
import { CgMenuRightAlt, CgClose, CgDarkMode } from 'react-icons/cg/index';
import eclipse from '../assets/Ellipse 1.svg';
import { ThemeContext } from '../utils/ProjectsData';

function Navbar() {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.className = theme === 'light' ? 'dark' : 'light';
  };

  const handleView = () => {
    if (!document.startViewTransition) handleThemeToggle();
    document.startViewTransition(handleThemeToggle);
  };

  const showNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="glass h-16 flex justify-between items-center md:px-20 py-0 px-6 fixed top-0 z-50 w-full transition-all duration-300">
      <h1 className=" dark:text-textDarck text-primary text-xl">Fuhidy</h1>
      <ul className=" gap-4 items-center hidden sm:flex navItem">
        <li><a href="#home" className="dark:text-textDarck text-text px-2 py-2 rounded-md transition-colors hover:text-primary dark:hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Hello</a></li>
        <li><a href="#portfolio" className="dark:text-textDarck text-text px-2 py-2 rounded-md transition-colors hover:text-primary dark:hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Portfolio</a></li>
        <li><a href="#aboutme" className="dark:text-textDarck text-text px-2 py-2 rounded-md transition-colors hover:text-primary dark:hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">About me</a></li>
        <li className="dark:bg-primaryDarck bg-primary text-background py-2 px-4 rounded-3xl hover:drop-shadow-lg"><a className="text-base sm-text-lg" href="#contact">Contact</a></li>
        <li>
          <a
            href="#!"
            aria-label={`Turn On ${
              theme === 'light' ? 'dark' : 'light'
            } Mood`}
            onClick={handleView}
            className="toggle"
          >
            <CgDarkMode className={`w-8 h-8 ${theme === 'light' ? ' text-text' : 'text-textDarck'} `} />
          </a>

        </li>

      </ul>

      {/* hamburger */}
      {nav ? (

        <CgClose className="w-8 h-8 z-50 right-[15px] fixed text-text dark:text-textDarck  sm:hidden" onClick={showNav} />

      ) : (
        <CgMenuRightAlt className="w-8 h-8 text-text  dark:text-textDarck sm:hidden" onClick={showNav} />
      )}

      {/* second nav */}
      <ul className={`bg-background/95 dark:bg-backgroundDarck/95 backdrop-blur-3xl h-[100vh] pt-32 gap-12 fixed top-[0px] flex flex-col w-full sm:hidden z-40 duration-700 ease-in-out overflow-y-hidden rounded-none border-0 ${
        nav ? 'right-[0px] opacity-100' : 'right-[-100%] opacity-0'
      } `}
      >
        <a
          href="#!"
          aria-label={`Turn On ${
            theme === 'light' ? 'dark' : 'light'
          } Mood`}
          onClick={handleView}
          className="toggle w-8 h-8 z-50 top-[26px] left-[15px] duration-[1500ms] ease-in-out absolute text-text dark:text-textDarck sm:hidden"
        >
          <CgDarkMode className={`w-8 h-8 ${theme === 'light' ? ' text-text' : 'text-textDarck'} `} />
        </a>
        <li><a className="pl-20 sm-text-lg dark:text-textDarck text-text text-4xl underline" onClick={showNav} href="#home">Hello</a></li>
        <li><a className="pl-20 sm-text-lg dark:text-textDarck text-text text-4xl underline" onClick={showNav} href="#portfolio">Portfolio</a></li>
        <li><a className="pl-20 sm-text-lg dark:text-textDarck text-text text-4xl underline" onClick={showNav} href="#aboutme">About me</a></li>
        <li><a className="pl-20 sm-text-lg dark:text-textDarck text-text text-4xl underline" onClick={showNav} href="#contact">Contact</a></li>
        <img src={eclipse} alt="circle" className="h-10 pr-60" />
      </ul>
    </nav>
  );
}
export default Navbar;
