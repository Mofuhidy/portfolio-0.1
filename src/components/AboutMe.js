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
      <div className="aboutMeParagraph sm:w-1/2 relative z-10">
        <h2 className="text-5xl sm:text-6xl md:text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent myName tracking-tight">
          <p className="text-base sm:text-xl text-primary/80 dark:text-primaryDarck/80 font-medium tracking-widest uppercase mb-4 font-sans">Discover More</p>
          About me
        </h2>
        <p className="text-sm md:text-lg mt-8 dark:text-textDarck leading-5 md:leading-7">
          &quot;I&apos;m a Software Engineer from Yemen with a focus on building
          intelligent, agent-first applications. With over 2 years of experience at Fastn
          (a US-based startup), I&apos;ve honed my skills in building scalable
          architectures and seamless user experiences.
          <br />
          <br />
          Currently, I&apos;m pushing the boundaries of Agentic Engineering through projects
          like Lahza (AI Semantic Search for Thmanyah) and Hira (AI-powered decision tool).
          I specialize in Next.js, TypeScript, and orchestrating AI Agents to solve
          complex problems.
          <br />
          <br />
          Beyond the terminal, I&apos;m a fan of Milk Tea, a dedicated anime watcher,
          and a cinema enthusiast. I don&apos;t just write code; I design systems that
          bridge the gap between human needs and machine intelligence. I&apos;m always
          looking for the next challenge that requires a mix of logic, creativity,
          and a touch of AI.&quot;
        </p>
        <a href="#cv" target="_blank">
          <a href="../works/Mohammed Alfuhidy - Frontend Engineer.pdf" target="_blank">
            <button type="button" className="bg-gradient-to-r from-primary to-accent mt-10 w-full text-white py-4 px-6 rounded-full font-medium shadow-[0_4px_14px_0_rgba(13,148,136,0.39)] sm:hidden">Get my Resume</button>
          </a>
          <a href="../works/Mohammed Alfuhidy - Frontend Engineer.pdf" target="_blank">
            <span className="hidden sm:inline-flex text-primary dark:text-primaryDarck mt-10 items-center gap-3 font-medium hover:text-accent transition-colors group cursor-pointer">
              Get my Resume
              <BsBoxArrowUpRight className="text-primary dark:text-primaryDarck group-hover:text-accent transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </span>
          </a>
        </a>
      </div>

      <div className="cards mt-12 sm:mt-0 sm:pb-0 pb-32 md:grid md:grid-cols-2 gap-6 sm:w-1/2 relative z-10">
        <div
          className="mt-6 md:mt-0 rounded-2xl w-full sm:h-80 md:h-auto glass p-8 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.15)] group"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={hash} alt="hash icon" loading="lazy" decoding="async" className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="font-bold text-xl text-text dark:text-textDarck mt-6 tracking-wide">Languages</h3>
          <ul className="my-6 list-none p-0 flex flex-wrap gap-2">
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">TypeScript</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">JavaScript</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Java</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">PHP</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Ruby</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">HTML</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">CSS</li>
          </ul>
        </div>

        <div
          className="mt-6 md:mt-0 rounded-2xl w-full sm:h-80 md:h-auto glass p-8 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.15)] group"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={frameworks} alt="frameworks icon" loading="lazy" decoding="async" className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="font-bold text-xl text-text dark:text-textDarck mt-6 tracking-wide">Frameworks</h3>
          <ul className="my-6 md:mt-6 list-none p-0 flex flex-wrap gap-2">
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Next.js</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">React</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Ruby on Rails</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Rspec</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Tailwind</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Bootstrap</li>
          </ul>
        </div>

        <div
          className="mt-6 md:mt-0 rounded-2xl w-full sm:h-80 md:h-auto glass p-8 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.15)] group"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={skills} alt="skills icon" loading="lazy" decoding="async" className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="font-bold text-xl text-text dark:text-textDarck mt-6 tracking-wide">Skills</h3>
          <ul className="my-6 list-none p-0 flex flex-wrap gap-2">
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Remote Collaboration</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Pair-Programming</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Github</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Git</li>
            <li className="bg-primary/10 text-primary dark:bg-primaryDarck/10 dark:text-primaryDarck px-3 py-1 rounded-full text-sm font-medium">Web Development</li>
          </ul>
        </div>

        <div
          className="mt-6 md:mt-0 rounded-2xl w-full sm:h-80 md:h-auto glass p-8 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.15)] group"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src={softSkills} alt="soft skills icon" loading="lazy" decoding="async" className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="font-bold text-xl text-text dark:text-textDarck mt-6 tracking-wide">Soft Skills</h3>
          <ul className="my-6 list-none p-0 flex flex-wrap gap-2">
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Communication</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Problem Solving</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Adaptability</li>
            <li className="bg-accent/10 text-accent dark:bg-accentDarck/10 dark:text-accentDarck px-3 py-1 rounded-full text-sm font-medium">Patience</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default AboutMe;
