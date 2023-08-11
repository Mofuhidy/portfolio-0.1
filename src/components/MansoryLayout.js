import { useContext, useEffect, useState } from 'react';
import MansoryItem from './MansoryItem';
import ProjectsContext from '../utils/ProjectsData';

function MansoryLayout() {
  const projectsData = useContext(ProjectsContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ul className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 relative">
      {
      projectsData.map((project, index) => (
        <MansoryItem key={project.title} project={project} style={{ top: windowWidth < 600 ? `${50 + index * 60}px` : 'auto' }} />
      ))

      }
    </ul>
  );
}
export default MansoryLayout;
