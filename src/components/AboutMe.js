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
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mt-10 sm:mt-0 min-h-screen sm:px-20 p-4 flex flex-col lg:flex-row-reverse lg:justify-center items-center gap-10 mx-auto " id="aboutme">
      <div className="aboutMeParagraph sm:w-1/2">
        <h2 className=" text-2xl sm:text-5xl md:text-7xl font-semibold text-primary myName">
          <p className=" text-sm sm:text-base  text-text font-normal">some words</p>
          About me
        </h2>
        <p className="text-xs sm:text-sm md:text-lg mt-8  leading-5 md:leading-7">
          I am a front-end developer from Yemen who is passionate about learning
          new things every day. I enjoy drinking
          tea, coffee, watching anime, movies, and series, and listening to music.
          I am currently enrolled in Microverse, a coding bootcamp that is helping
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
            <span className="hidden sm:flex text-primary mt-8  items-center gap-2 hover:underline hover:transition-all">
              Get my Resume
              <BsBoxArrowUpRight className="text-primary" />
            </span>
          </a>
        </a>
      </div>

      <div className="cards mt-8 sm:mt-0 sm:pb-0 pb-32 md:grid md:grid-cols-2 gap-4 sm:w-1/2">
        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={hash} alt="hash icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6">Languages</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary ">JavaScript (ES5/ES6)</li>
            <li className="text-secondary ">Ruby</li>
            <li className="text-secondary ">HTML</li>
            <li className="text-secondary ">CSS</li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={frameworks} alt="frameworks icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6">Frameworks</h3>
          <ul className="my-6 md:mt-0 list-disc pl-4">
            <li className="text-secondary ">React</li>
            <li className="text-secondary ">Ruby on Rails</li>
            <li className="text-secondary ">Rspec</li>
            <li className="text-secondary ">Tailwind</li>
            <li className="text-secondary ">Bootstrap</li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={skills} alt="skills icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6">Skills</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary ">
              Remote Collaboration
            </li>
            <li className="text-secondary ">
              Pair-Programming
            </li>
            <li className="text-secondary ">Github</li>
            <li className="text-secondary ">Git</li>
            <li className="text-secondary ">
              Web Development
            </li>
          </ul>
        </div>

        <div
          className=" mt-6 md:mt-0 rounded-xl w-full sm:h-72 md:h-auto bg-text p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={softSkills} alt="soft skills icon" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className=" font-bold text-lg text-background mt-6">Soft Skills</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary ">Communication</li>
            <li className="text-secondary ">Problem Solving</li>
            <li className="text-secondary ">Adaptability</li>
            <li className="text-secondary ">Patience</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default AboutMe;
