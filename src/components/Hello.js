// import eclipse from '../assets/Ellipse 1.svg';
// import eclipsBig from '../assets/Ellipsebig.svg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

function Hello() {
  return (
    <section className="landing md:px-20 py-0 px-4">
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
              <a href="#linkedin" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="#github" target="_blank">
                <AiFillGithub />
              </a>
              <a href="#well" target="_blank">
                <FaAngellist />
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
          <a href="#linkedin" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="#github" target="_blank">
            <AiFillGithub />
          </a>

          <a href="#well" target="_blank">
            <FaAngellist />
          </a>
        </div>
      </div>

      {/* <p className=" text-xs sm:text-lg  paragraph">
          I am a frontend developer!
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded, don’t hesitate and contact me.
        </p> */}
      {/* <img src={eclipse} alt="circle" className="h-14 absolute top-[-5rem] right-8 sm:hidden" />
      <img src={eclipsBig} alt="circle" className="sm:absolute sm:top-[-5rem] sm:right-0 md:right-0
      hidden sm:block" /> */}
    </section>
  );
}
export default Hello;
