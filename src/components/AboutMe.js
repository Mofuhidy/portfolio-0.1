import { useEffect } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Aos from 'aos';
import hash from '../assets/ic_languages.svg';
import frameworks from '../assets/ic_frameworks.svg';
import skills from '../assets/ic_skills.svg';
import softSkills from '../assets/ic_soft-skills.svg';
import 'aos/dist/aos.css';

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="mt-10 sm:mt-0 min-h-screen sm:px-20 p-4 flex flex-col lg:flex-row-reverse lg:justify-center items-center gap-10 mx-auto " id="aboutme">
      <div className="aboutMeParagraph sm:w-1/2">
        <h2 className=" text-2xl sm:text-5xl md:text-7xl font-semibold dark:text-accentDarck text-primary myName">
          <p className=" text-sm sm:text-base  text-text dark:text-textDarck font-normal">some words</p>
          About me
        </h2>
        <p className="text-xs sm:text-sm md:text-lg mt-8  dark:text-textDarck  leading-5 md:leading-7">
          I am a front-end developer from Yemen who is passionate about learning
          new things every day. I enjoy drinking
          tea, coffee, watching anime, movies, and series, and listening to music.
          I am currently enrolled in Microverse, an online school that is helping
          me to become a better developer.
          I am always looking for new challenges and opportunities to learn and grow.
          I am confident that my passion
          for learning and my dedication to my craft will make me a valuable asset to any team.
          If you are looking for a talented and motivated front-end developer,
          please do not hesitate to contact me.
        </p>
        <a href="#cv" target="_blank">
          <button type="button" className="bg-accent mt-8 w-full text-background py-3 px-4 rounded-3xl sm:hidden">Get my Resume</button>
          <a href="../works/01Mohammed AlFuhidy Resume - (fr).pdf" target="_blank">
            <span className="hidden sm:flex text-primary dark:text-accentDarck mt-8  items-center gap-2 hover:underline hover:transition-all">
              Get my Resume
              <BsBoxArrowUpRight className="text-primary dark:text-accentDarck" />
            </span>
          </a>
        </a>
      </div>

      <div className="cards mt-8 sm:mt-0 sm:pb-0 pb-32 md:grid md:grid-cols-2 gap-4 sm:w-1/2">
        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text dark:bg-textDarck p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={hash} alt="hash icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background dark:text-text mt-6">Languages</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary dark:text-secondaryDarck ">JavaScript (ES5/ES6)</li>
            <li className="text-secondary dark:text-secondaryDarck ">Ruby</li>
            <li className="text-secondary dark:text-secondaryDarck ">HTML</li>
            <li className="text-secondary dark:text-secondaryDarck ">CSS</li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text dark:bg-textDarck p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={frameworks} alt="frameworks icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6  dark:text-text">Frameworks</h3>
          <ul className="my-6 md:mt-0 list-disc pl-4">
            <li className="text-secondary dark:text-secondaryDarck ">React</li>
            <li className="text-secondary dark:text-secondaryDarck ">Ruby on Rails</li>
            <li className="text-secondary dark:text-secondaryDarck ">Rspec</li>
            <li className="text-secondary dark:text-secondaryDarck ">Tailwind</li>
            <li className="text-secondary dark:text-secondaryDarck ">Bootstrap</li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text dark:bg-textDarck p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={skills} alt="skills icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6  dark:text-text">Skills</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary dark:text-secondaryDarck ">
              Remote Collaboration
            </li>
            <li className="text-secondary dark:text-secondaryDarck ">
              Pair-Programming
            </li>
            <li className="text-secondary dark:text-secondaryDarck ">Github</li>
            <li className="text-secondary dark:text-secondaryDarck ">Git</li>
            <li className="text-secondary dark:text-secondaryDarck ">
              Web Development
            </li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text dark:bg-textDarck p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={softSkills} alt="soft skills icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6  dark:text-text">Soft Skills</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary dark:text-secondaryDarck ">Communication</li>
            <li className="text-secondary dark:text-secondaryDarck ">Problem Solving</li>
            <li className="text-secondary dark:text-secondaryDarck ">Adaptability</li>
            <li className="text-secondary dark:text-secondaryDarck ">Patience</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default AboutMe;
