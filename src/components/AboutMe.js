import hash from '../assets/hash.svg';
import frameworks from '../assets/ic_frameworks.svg';
import skills from '../assets/ic_skills.svg';
import softSkills from '../assets/ic_soft-skills.svg';

function AboutMe() {
  return (
    <div className="mt-10 min-h-screen md:px-20 py-0 px-4 flex flex-col sm:flex-row">
      <div className="aboutMeParagraph">
        <h2 className=" text-5xl sm:text-8xl font-semibold text-primary myName">
          <p className=" text-sm sm:text-base text-text font-normal">some words</p>
          About me
        </h2>
        <p className=" text-xs sm:text-lg paragraph mt-8">
          I am a frontend developer!
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded, don’t hesitate and contact me.
        </p>
        <a href="#cv" target="_blank">
          <button type="button" className="bg-accent mt-8 w-full text-background py-3 px-4 rounded-3xl sm:hidden">Get my Resume</button>
          <span className="hidden sm:flex text-primary mt-8">Get my Resume</span>
        </a>
      </div>

      <div className="cards mt-8 pb-32 ">
        <div className=" mt-6 rounded-xl w-full bg-text p-6">
          <img src={hash} alt="hash icon" className="w-10 h-10" />
          <h3 className=" font-bold text-lg text-background mt-6">Languages</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary ">JavaScript (ES5/ES6)</li>
            <li className="text-secondary ">Ruby</li>
            <li className="text-secondary ">HTML</li>
            <li className="text-secondary ">CSS</li>
          </ul>
        </div>
        {' '}
        <div className=" mt-6 rounded-xl w-full bg-text p-6">
          <img src={frameworks} alt="frameworks icon" className="w-10 h-10" />
          <h3 className=" font-bold text-lg text-background mt-6">Frameworks</h3>
          <ul className="my-6 list-disc pl-4">
            <li className="text-secondary ">React</li>
            <li className="text-secondary ">Ruby on Rails</li>
            <li className="text-secondary ">Rspec</li>
            <li className="text-secondary ">Tailwind</li>
            <li className="text-secondary ">Bootstrap</li>
          </ul>
        </div>
        {' '}
        <div className=" mt-6 rounded-xl w-full bg-text p-6">
          <img src={skills} alt="skills icon" className="w-10 h-10" />
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
        {' '}
        <div className=" mt-6 rounded-xl w-full bg-text p-6">
          <img src={softSkills} alt="soft skills icon" className="w-10 h-10" />
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
