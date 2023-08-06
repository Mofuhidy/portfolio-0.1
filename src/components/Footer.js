import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsTelegram, BsBoxArrowUpRight } from 'react-icons/bs';

function Footer() {
  return (

    <div className=" bg-background flex sm:flex-row flex-col justify-around items-center h-20 sm:h-10 gap-4">

      <span className="transition-all ease-out duration-500 flex text-base font-normal text-text items-center gap-2 sm:pt-0 pt-4">
        Get my Resume
        <BsBoxArrowUpRight className="text-text text-base" />
      </span>

      <div className=" text-lg flex gap-4  text-text  transition-all ease-out duration-500 sm:pb-0 pb-4">
        <a href="https://www.linkedin.com/in/mo-fuhidy/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Mofuhidy" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>

        <a href="https://wellfound.com/u/mo-fuhidy" target="_blank" rel="noreferrer">
          <FaAngellist />
        </a>

        <a href="https://www.t.me/mofuhidy" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
      </div>
    </div>

  );
}
export default Footer;
