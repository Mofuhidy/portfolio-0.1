import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Hello() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="landing md:px-20 py-0 px-4" id="home">
      <div className="flex flex-col sm:flex-row sm:items-center items-start sm:gap-10 gap-5 justify-around">
        <div className=" mt-24 flex flex-col sm:gap-5 sm:relative md:relative">

          <h1 className=" text-5xl sm:text-8xl font-semibold dark:text-textDarck text-primary myName intro" data-aos="fade-right">
            <p
              className=" text-sm sm:text-base dark:text-textDarck text-text font-normal"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello, I’m
            </p>
            Mohammed
            <br />
            AlFuhidy
          </h1>

          <div className="callToAction flex items-center  mt-3 gap-5" data-aos="fade-up-right">
            <a href="#portfolio">
              <button type="button" className="order-last bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl hidden sm:block btn hover:shadow-sm hover:translate-y-[-4px] hover:transition-transform">See my Works</button>
            </a>
            <div className="order-last text-2xl sm:text-4xl sm:flex gap-4 text-accent hidden btn">
              <a href="https://www.linkedin.com/in/mo-fuhidy/" target="_blank" rel="noreferrer" className="dark:text-accentDarck hover:transition-opacity hover:duration-500 hover:text-text dark:hover:text-textDarck">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Mofuhidy" target="_blank" rel="noreferrer" className="dark:text-accentDarck hover:transition-opacity hover:duration-500 hover:text-text dark:hover:text-textDarck">
                <AiFillGithub />
              </a>
              <a href="https://wellfound.com/u/mo-fuhidy" target="_blank" rel="noreferrer" className="dark:text-accentDarck hover:transition-opacity hover:duration-500 hover:text-text dark:hover:text-textDarck">
                <FaAngellist />
              </a>
              <a href="https://www.t.me/mofuhidy" target="_blank" rel="noreferrer" className="dark:text-accentDarck hover:transition-opacity hover:duration-500 hover:text-text dark:hover:text-textDarck">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
        <div
          className="sm:mt-24 sm:translate-y-[60px] translate-y-[-60px] flex flex-col sm:gap-5 gap-2 items-start desc"
          data-aos="fade"
          data-aos-easing="ease-out-cubic"
        >
          <p className="uppercase font-light sm:text-lg text-base dark:text-textDarck">
            Frontend Innovation Maestro
          </p>
          <p className="uppercase font-light sm:text-lg text-base dark:text-textDarck">
            Based in Sana&lsquo;a
            <br />
            YEMEN
          </p>
        </div>
        <a href="#portfolio">
          <button type="button" className="order-2 bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl  sm:hidden ">See my Works</button>
        </a>
        <div className="order-1 text-2xl sm:text-4xl flex gap-4  text-accent sm:hidden btn">
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
          <a href="https://www.instagram.com/mofuhidy/" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>

    </section>
  );
}
export default Hello;
