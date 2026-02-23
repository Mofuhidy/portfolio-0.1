/* eslint-disable max-len */
import propTypes from 'prop-types';
import { CgClose } from 'react-icons/cg/index';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function Modal({ show, project, onClose }) {
  Modal.defultProp = {
    closeShow: () => {},
  };

  if (!show || !project) return null;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60 transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-background dark:bg-backgroundDarck rounded-3xl shadow-2xl relative flex flex-col xl:flex-row overflow-hidden border border-secondary/20 dark:border-secondaryDarck/20 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button for mobile - absolute top right */}
        <button
          type="button"
          onClick={onClose}
          className="xl:hidden absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
          title="Close modal"
        >
          <CgClose className="w-5 h-5" />
        </button>

        {/* Left Side: Image */}
        <div className="w-full xl:w-1/2 bg-secondary/10 dark:bg-secondaryDarck/30 flex items-center justify-center min-h-[35vh] xl:min-h-[65vh] relative group overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover xl:absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full xl:w-1/2 p-6 sm:p-10 xl:p-12 flex flex-col justify-center bg-background dark:bg-backgroundDarck">
          <div className="flex justify-between items-start mb-6">
            <h2 className="title text-3xl sm:text-4xl font-bold text-text dark:text-textDarck leading-tight">
              {project.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="hidden xl:block p-2 text-text/60 hover:text-primary dark:text-textDarck/60 dark:hover:text-primaryDarck transition-colors"
              title="Close modal"
            >
              <CgClose className="w-8 h-8" />
            </button>
          </div>

          <ul className="flex flex-wrap gap-2 mb-8">
            {project.technology.map((stack) => (
              <li key={stack} className="uppercase bg-primary/10 dark:bg-primaryDarck/10 text-primary dark:text-primaryDarck py-1.5 px-4 text-xs font-bold tracking-wider rounded-full">
                {stack}
              </li>
            ))}
          </ul>

          <p className="text-text/80 dark:text-textDarck/80 md:text-lg text-base leading-relaxed mb-10 lg:pr-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary dark:bg-primaryDarck text-background dark:text-textDarck px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30"
            >
              See live
              <BsBoxArrowUpRight className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 border-2 border-primary dark:border-primaryDarck text-primary dark:text-primaryDarck px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white dark:hover:bg-primaryDarck dark:hover:text-white transition-all hover:-translate-y-1"
            >
              See source
              <AiFillGithub className="text-xl" />
            </a>
          </div>
        </div>

      </div>
    </div>
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
