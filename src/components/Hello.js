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
    <section className="landing md:px-20 py-0 px-4 pt-16" id="home">
      <div className="flex flex-col sm:flex-row sm:items-center items-start sm:gap-10 gap-5 justify-around">
        <div className=" mt-24 flex flex-col sm:gap-5 sm:relative md:relative">

          <h1 className="myName text-6xl sm:text-[100px] font-extrabold text-primary dark:text-textDarck leading-tight tracking-tight intro" data-aos="fade-right">
            <p
              className="text-base sm:text-xl text-text/80 dark:text-textDarck/80 font-medium tracking-widest uppercase mb-2 font-sans"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello, I&apos;m
            </p>
            Mohammed
            <br />
            AlFuhidy
          </h1>

          <div className="callToAction flex items-center mt-8 gap-6" data-aos="fade-up-right">
            <a href="#contact">
              <button type="button" className="order-last bg-gradient-to-r from-primary to-accent text-white py-3 px-8 rounded-full hidden sm:block font-medium tracking-wide shadow-[0_4px_14px_0_rgba(13,148,136,0.39)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.5)] hover:-translate-y-1 transition-all duration-300">Contact me</button>
            </a>
            <div className="order-last text-2xl sm:text-3xl sm:flex gap-5 text-accent hidden btn">
              <a href="https://www.linkedin.com/in/mo-fuhidy/" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 hover:text-primary dark:hover:text-primary transition-colors duration-300" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Mofuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 hover:text-primary dark:hover:text-primary transition-colors duration-300" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://wellfound.com/u/mo-fuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 hover:text-primary dark:hover:text-primary transition-colors duration-300" rel="noreferrer">
                <FaAngellist />
              </a>
              <a href="https://www.t.me/mofuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 hover:text-primary dark:hover:text-primary transition-colors duration-300" rel="noreferrer">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
        <div
          className="sm:mt-24 sm:translate-y-[60px] translate-y-[-60px] flex flex-col sm:gap-4 gap-2 items-start desc"
          data-aos="fade"
          data-aos-easing="ease-out-cubic"
        >
          <div className="space-y-2">
            <p className="tracking-widest font-bold uppercase sm:text-xl text-lg text-primary/90 dark:text-primaryDarck/90">
              Software Engineer | AI & Agents
            </p>
            <p className="tracking-wider font-light uppercase sm:text-base text-sm text-text/70 dark:text-textDarck/70">
              Ex-Fastn (US Remote)
              <br />
              Based in Sana&lsquo;a, YEMEN
            </p>
          </div>
        </div>
        <a href="#portfolio">
          <button type="button" className="order-2 bg-gradient-to-r from-primary to-accent text-white py-3 px-8 rounded-full sm:hidden font-medium shadow-[0_4px_14px_0_rgba(13,148,136,0.39)] active:scale-95 transition-transform">See my Works</button>
        </a>
        <div className="order-1 text-2xl sm:text-4xl flex gap-5 text-accent sm:hidden btn">
          <a href="https://www.linkedin.com/in/mo-fuhidy/" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 active:text-primary transition-colors" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Mofuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 active:text-primary transition-colors" rel="noreferrer">
            <AiFillGithub />
          </a>

          <a href="https://wellfound.com/u/mo-fuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 active:text-primary transition-colors" rel="noreferrer">
            <FaAngellist />
          </a>

          <a href="https://www.t.me/mofuhidy" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 active:text-primary transition-colors" rel="noreferrer">
            <BsTelegram />
          </a>
          <a href="https://www.instagram.com/mofuhidy/" target="_blank" className="text-secondaryDarck/60 dark:text-secondary/60 active:text-primary transition-colors" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>

    </section>
  );
}
export default Hello;
