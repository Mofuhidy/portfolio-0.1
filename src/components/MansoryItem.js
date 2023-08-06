import Proptypes from 'prop-types';
// import { useState } from 'react';

function MansoryItem({ project }) {
  // Function to get a random item from an array
  // const arrayRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // const [heights] = useState(arrayRandomItem(['h-80', 'h-96', 'h-[460px]']));

  return (
    <li className="bg-gradient-to-t from-accent to-primary rounded-xl  w-full mb-8 overflow-hidden h-auto ">
      <img src={project.image} alt={project.title} loading="lazy" className=" aspect-auto h-full w-full" />
    </li>
  );
}

MansoryItem.propTypes = {
  project: Proptypes.shape({
    title: Proptypes.string,
    image: Proptypes.string,
  }).isRequired,
};

export default MansoryItem;
