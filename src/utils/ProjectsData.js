import { createContext } from 'react';
import projects from '../data/projects';

const ProjectsContext = createContext(projects);
export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export default ProjectsContext;
