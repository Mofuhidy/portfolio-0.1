import propTypes from 'prop-types';
import { CgClose } from 'react-icons/cg/index';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function Modal({ show, project, onClose }) {
  return (
    <>
      {show && project && (
      <div className="z-[999] fixed h-full w-full top-0 left-0 backdrop-blur bg-text bg-opacity-5 transition-all ease-linear duration-300 overflow-x-hidden overflow-y-scroll" style={{ marginTop: 0 }}>
        <div className=" md:m-[4%] md:mb-32 md:p-14 p-4 m-[2.5%] mt-10 z-[9999] transition-all ease-linear duration-500 bg-text rounded-xl shadow-md ">
          <div className="header">
            <h2 className="title md:text-4xl sm:text-3xl text-lg sm:leading-3 text-background flex items-center justify-between ">
              <span>{project.title}</span>
              <CgClose className="w-8 h-8 z-50  text-background sm cursor-pointer" onClick={onClose} />
            </h2>
            <ul className="flex flex-wrap sm:py-11 py-4">
              {
          project.technology.map((stack) => (
            <li key={stack} className="my-2 uppercase  bg-secondary py-1 px-4 mr-2 mt-0 text-text text-xs sm:text-base rounded-xl  font-medium">{stack}</li>
          ))
          }
            </ul>
          </div>
          <div className="flex sm:flex-row flex-col gap-8">
            <div className="flex-1 ">
              <a href={project.live} target="_blank" rel="noreferrer"><img src={project.image} alt={project.title} loading="lazy" className="max-h-80 w-full object-cover rounded-xl" /></a>
            </div>
            <div className="description  flex-1 text-background md:text-base text-base mt-4 relative">
              {project.description}
              <div className="action flex  sm:gap-16 justify-around items-center w-full sm:mt-9 mt-4">
                <a className="underline transition-all ease-out duration-500 flex text-xl font-normal text-accent items-center gap-2 sm:pt-0 pt-4" href={project.live} target="_blank" rel="noreferrer">
                  See live
                  <BsBoxArrowUpRight className=" text-base" />
                </a>

                <a className="underline transition-all ease-out duration-500 flex text-xl font-normal text-accent items-center gap-2 sm:pt-0 pt-4" href={project.repository} target="_blank" rel="noreferrer">
                  See source
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      )}
    </>
  );
}
Modal.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  project: propTypes.shape({
    title: propTypes.string,
    image: propTypes.string,
    repository: propTypes.string,
    live: propTypes.string,
    description: propTypes.string,
    technology: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};
export default Modal;
