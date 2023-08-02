import eclipse from '../assets/Ellipse 1.svg';
import eclipsBig from '../assets/Ellipsebig.svg';

function Hello() {
  return (
    <main className="relative">
      <div className=" mt-24 flex flex-col gap-10 sm:relative md:relative">
        <h1 className=" text-5xl sm:text-8xl font-semibold text-primary">
          <p className=" text-sm sm:text-base text-text font-normal">Hello, I’m</p>
          Mohammed
          <br />
          AlFuhidy
        </h1>

        <p className=" text-xs sm:text-lg  paragraph">
          I am a frontend developer!
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded, don’t hesitate and contact me.
        </p>
      </div>
      <img src={eclipse} alt="circle" className="h-14 fixed top-32 right-8 sm:hidden" />
      <img src={eclipsBig} alt="circle" className="sm:fixed top-32 sm:right-10 md:right-96 hidden sm:block" />
    </main>
  );
}
export default Hello;
