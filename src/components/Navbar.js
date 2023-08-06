import { useState } from 'react';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg/index';
import eclipse from '../assets/Ellipse 1.svg';

function Navbar() {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };
  return (
    <nav className=" h-20 flex justify-between items-center md:px-20  py-0 px-4">
      <h1 className=" text-xl">Fuhidy</h1>
      <ul className=" gap-4 items-center hidden sm:flex">
        <li><a className="" href="#home">Hello</a></li>
        <li><a className="" href="#portfolio">Portfolio</a></li>
        <li><a className="" href="#aboutme">About me</a></li>
        <li className=" bg-primary text-background py-2 px-4 rounded-3xl"><a className="text-base sm-text-lg" href="#contact">Contact</a></li>
      </ul>

      {/* hamburger */}
      {nav ? (
        <CgClose className="w-8 h-8 z-50 right-[15px] fixed text-text sm:hidden" onClick={showNav} />
      ) : (
        <CgMenuRightAlt className="w-8 h-8 text-text sm:hidden" onClick={showNav} />
      )}

      {/* second nav */}
      <ul className={`h-full pt-32 gap-12 fixed top-[0px] flex flex-col w-full sm:hidden bg-background z-40 duration-1000 ease-in-out overflow-y-hidden ${
        nav ? 'right-[0px] opacity-100' : 'right-[-100%] opacity-50'
      } `}
      >
        <li><a className="p-20 sm-text-lg text-text text-4xl underline" onClick={showNav} href="#home">Hello</a></li>
        <li><a className="p-20 sm-text-lg text-text text-4xl underline" onClick={showNav} href="#portfolio">Portfolio</a></li>
        <li><a className="p-20 sm-text-lg text-text text-4xl underline" onClick={showNav} href="#aboutme">About me</a></li>
        <li><a className="p-20 sm-text-lg text-text text-4xl underline" onClick={showNav} href="#contact">Contact</a></li>
        <img src={eclipse} alt="circle" className="h-10 pr-60" />
      </ul>
    </nav>
  );
}
export default Navbar;
