import { useContext, useEffect, useState } from 'react';
import MansoryItem from './MansoryItem';
import ProjectsContext from '../utils/ProjectsData';

function MansoryLayout() {
  const projectsData = useContext(ProjectsContext);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 768) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); // trigger on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const columnWrappers = Array.from({ length: columns }, () => []);
  projectsData.forEach((project, index) => {
    columnWrappers[index % columns].push(project);
  });

  return (
    <div className="flex gap-6 w-full relative transition duration-1000 ease-in">
      {columnWrappers.map((column, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ul key={`column-${index}`} className="flex-1 flex flex-col space-y-6">
          {column.map((project) => (
            <MansoryItem
              key={project.title}
              project={project}
              style={{ top: columns === 1 ? `${50 + projectsData.indexOf(project) * 20}px` : 'auto' }}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}
export default MansoryLayout;
