import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';

function Hello() {
  return (
    <section className="landing md:px-20 py-0 px-4" id="home">
      <div className="flex flex-col sm:flex-row sm:items-center items-start sm:gap-10 gap-5 justify-around">
        <div className=" mt-24 flex flex-col sm:gap-5 sm:relative md:relative">
          <h1 className=" text-5xl sm:text-8xl font-semibold text-primary myName">
            <p className=" text-sm sm:text-base text-text font-normal">Hello, I’m</p>
            Mohammed
            <br />
            AlFuhidy
          </h1>
          <div className="callToAction flex items-center  mt-3 gap-5">
            <button type="button" className="order-last bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl hidden sm:block">See my Works</button>
            <div className="order-last text-2xl sm:text-4xl sm:flex gap-4 text-accent hidden">
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
        <div className="sm:mt-24 mt-2 flex flex-col sm:gap-5 gap-2 items-start">
          <p className="uppercase font-light sm:text-lg text-base">
            Frontend Innovation Maestro
          </p>
          <p className="uppercase font-light sm:text-lg text-base">
            Based in Sana&lsquo;a
            <br />
            YEMEN
          </p>
        </div>

        <button type="button" className="order-2 bg-gradient-to-r from-primary to-accent text-background py-3 px-4 rounded-3xl  sm:hidden">See my Works</button>
        <div className="order-1 text-2xl sm:text-4xl flex gap-4  text-accent sm:hidden">
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

    </section>
  );
}
export default Hello;
