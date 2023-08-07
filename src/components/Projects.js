import MansoryLayout from './MansoryLayout';

function Projects() {
  return (
    <div className="mt-40 bg-primary min-h-full md:px-20 py-0 px-4 relative" id="portfolio">
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
