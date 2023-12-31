import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsTelegram, BsBoxArrowUpRight } from 'react-icons/bs';

function Footer() {
  return (

    <div className=" bg-background dark:bg-backgroundDarck flex sm:flex-row flex-col justify-around items-center h-20 sm:h-20 gap-4">

      <a href="../works/01Mohammed AlFuhidy Resume - (fr).pdf" target="_blank">

        <span className="transition-all ease-out duration-500 flex text-base font-normal text-text  dark:text-accentDarck items-center gap-2
      cursor-pointer sm:pt-0 pt-4 hover:underline hover:transition-all"
        >
          Get my Resume
          <BsBoxArrowUpRight className="text-text text-base dark:text-accentDarck " />
        </span>
      </a>

      <div className=" text-lg  sm:text-xl flex gap-4  text-text  transition-all ease-out duration-500 sm:pb-0 pb-4 ">
        <a href="https://www.linkedin.com/in/mo-fuhidy/" target="_blank" className="dark:text-accentDarck dark:hover:text-textDarck hover:transition-opacity hover:duration-500 hover:text-accent" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Mofuhidy" target="_blank" className="dark:text-accentDarck dark:hover:text-textDarck hover:transition-opacity hover:duration-500 hover:text-accent" rel="noreferrer">
          <AiFillGithub />
        </a>

        <a href="https://wellfound.com/u/mo-fuhidy" target="_blank" className="dark:text-accentDarck dark:hover:text-textDarck hover:transition-opacity hover:duration-500 hover:text-accent" rel="noreferrer">
          <FaAngellist />
        </a>

        <a href="https://www.t.me/mofuhidy" target="_blank" className="dark:text-accentDarck dark:hover:text-textDarck hover:transition-opacity hover:duration-500 hover:text-accent" rel="noreferrer">
          <BsTelegram />
        </a>

        <a href="https://www.instagram.com/mofuhidy/" target="_blank" className="dark:text-accentDarck dark:hover:text-textDarck hover:transition-opacity hover:duration-500 hover:text-accent" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </div>
    </div>

  );
}
export default Footer;
