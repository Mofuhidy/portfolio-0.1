import { useContext } from 'react';
import MansoryItem from './MansoryItem';
import ProjectsContext from '../utils/ProjectsData';

function MansoryLayout() {
  const projectsData = useContext(ProjectsContext);

  return (
    <ul className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
      {
      projectsData.map((project) => (
        <MansoryItem key={project.title} project={project} />
      ))

      }
    </ul>
  );
}
export default MansoryLayout;
