// import one from '../assets/profile.jpg';

import MansoryLayout from './MansoryLayout';

// import two from '../assets/Fuhidy's profile.jpeg'
function Projects() {
  return (
    <div className="mt-40 bg-primary min-h-screen md:px-20 py-0 px-4 relative" id="portfolio">
      <h2 className="myName sm:text-[6.8rem] text-5xl text-background projectsTitle absolute sm:pt-5 pt-5 ">
        Projects
      </h2>
      <div className=" w-full sm:py-44 py-32 ">
        <MansoryLayout />
      </div>
    </div>
  );
}
export default Projects;
