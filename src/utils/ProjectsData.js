import { createContext } from 'react';
import projects from '../data/projects';

const ProjectsContext = createContext(projects);

export default ProjectsContext;
