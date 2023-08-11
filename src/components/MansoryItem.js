import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Modal from './Modal';
import 'aos/dist/aos.css';

function MansoryItem({ project, style }) {
  // Function to get a random item from an array
  const arrayRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [heights] = useState(arrayRandomItem(['sm:h-80', 'sm:h-96', 'sm:h-[460px]']));

  const [show, setShow] = useState(false);

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      return setShow(true);
    }
    if (e.key === 'Escape') {
      setShow(false);
    }
    return setShow(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, []);

  return (
    <>
      <li
        style={style}
        className={`
    projectCard
    bg-gradient-to-t from-accent to-primary rounded-xl 
     w-full mb-8 
     overflow-hidden 
     ${heights} 
     h-[26rem]
     relative
      group 
      flex
      items-end
      p-4
        cursor-pointer
        focus-within:outline-0
        focus:outline-0
      `}
        role="presentation"
        onClick={() => setShow(true)}
        onKeyDown={handlePress}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className=" aspect-auto h-full w-full filter brightness-90 cursor-pointer
        transition duration-700
        group-hover:sm:brightness-75
        group-hover:sm:blur-[2px]
        absolute left-0 top-0
        bg-center
        bg-no-repeat
        group-hover:sm:h-full
        group-hover:sm:bg-text
        "
        />

        <div className="w-full details z-30 transform block sm:opacity-0 sm:translate-y-0  group-hover:sm:opacity-100 group-hover:sm:translate-y-2 duration-300 ease-in ">
          <h2 className="mb-2 font-semibold text-background sm:text-xl text-lg">{project.title}</h2>
          {project.shortDescription
          && <p className="text-background mb-2 line-clamp">{project.shortDescription}</p>}
          <ul className="flex flex-wrap">
            {
          project.technology.map((stack) => (
            <li key={stack} className="my-2 uppercase  bg-secondary py-1 px-4 mr-2 mt-0 text-text text-xs rounded-xl font-medium">{stack}</li>
          ))
          }
          </ul>
          <button type="button" className=" flex items-center justify-center sm:hidden bg-background text-text shadow-sm w-full rounded-xl py-1" onClick={() => setShow(true)}> See to the project</button>
        </div>
      </li>
      <Modal
        show={show}
        project={project}
        onClose={() => setShow(false)}
        closeShow={() => setShow(false)}
      />
    </>
  );
}

MansoryItem.propTypes = {
  project: Proptypes.shape({
    title: Proptypes.string,
    image: Proptypes.string,
    shortDescription: Proptypes.string,
    technology: Proptypes.arrayOf(Proptypes.string),
  }).isRequired,
  style: Proptypes.shape({
    top: Proptypes.string,
  }),
};

MansoryItem.defaultProps = {
  style: 'top:50px',
};

export default MansoryItem;
