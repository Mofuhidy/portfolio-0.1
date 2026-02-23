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
    glass rounded-2xl
     w-full mb-8 
     overflow-hidden 
     ${heights} 
     h-[26rem]
     relative
      group 
      flex
      items-end
      p-5
        cursor-pointer
        focus-within:outline-0
        focus:outline-0
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.3)]
      `}
        role="presentation"
        onClick={() => setShow(true)}
        onKeyDown={handlePress}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="object-cover h-full w-full cursor-pointer
        transition-transform duration-700 ease-out
        group-hover:scale-110
        absolute left-0 top-0
        "
        />

        <div className="w-full details z-30 transform block sm:opacity-0 sm:translate-y-4 group-hover:sm:opacity-100 group-hover:sm:translate-y-0 duration-500 ease-out">
          <h2 className="mb-2 font-bold text-white sm:text-2xl text-xl tracking-wide">{project.title}</h2>
          {project.shortDescription
          && <p className="text-gray-200 mb-4 line-clamp-2 text-sm leading-relaxed">{project.shortDescription}</p>}
          <ul className="flex flex-wrap gap-2">
            {
          project.technology.map((stack) => (
            <li key={stack} className="uppercase bg-white/20 backdrop-blur-sm border border-white/30 py-1.5 px-3 text-white text-xs rounded-full font-medium tracking-wider">{stack}</li>
          ))
          }
          </ul>
          <button type="button" className="mt-4 flex items-center justify-center sm:hidden bg-primary text-white shadow-lg w-full rounded-full py-2 font-medium active:scale-95 transition-transform" onClick={() => setShow(true)}> See the project</button>
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
