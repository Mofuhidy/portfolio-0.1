import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import anime from 'animejs';
import { useEffect } from 'react';

function Hello() {
  useEffect(() => {
    anime({
      targets: '.intro',
      opacity: [0, 1],
      translateY: 10,
      duration: 1000,
      easing: 'linear',
    });
    anime({
      targets: '.desc',
      opacity: [0, 1],
      translateY: 10,
      duration: 1500,
      easing: 'linear',
    });

    anime({
      targets: '.btn',
      opacity: [0, 1],
      translateX: 5,
      duration: 2000,
    });
  }, []);

  return (
    <section className="landing md:px-20 py-0 px-4" id="home">
      <div className="flex flex-col sm:flex-row sm:items-center items-start sm:gap-10 gap-5 justify-around">
        <div className=" mt-24 flex flex-col sm:gap-5 sm:relative md:relative">
          <h1 className=" text-5xl sm:text-8xl font-semibold text-primary myName intro">
            <p className=" text-sm sm:text-base text-text font-normal">Hello, I’m</p>
            Mohammed
            <br />
            AlFuhidy
          </h1>
          <div className="callToAction flex items-center  mt-3 gap-5">
            <a href="#portfolio">
              <button type="button" className="order-last bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl hidden sm:block btn">See my Works</button>
            </a>
            <div className="order-last text-2xl sm:text-4xl sm:flex gap-4 text-accent hidden btn">
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
        </div>
        <div className="sm:mt-24 sm:translate-y-[60px] translate-y-[-60px] flex flex-col sm:gap-5 gap-2 items-start desc">
          <p className="uppercase font-light sm:text-lg text-base">
            Frontend Innovation Maestro
          </p>
          <p className="uppercase font-light sm:text-lg text-base">
            Based in Sana&lsquo;a
            <br />
            YEMEN
          </p>
        </div>

        <button type="button" className="order-2 bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl  sm:hidden btn translate-x-[-150px]">See my Works</button>
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
