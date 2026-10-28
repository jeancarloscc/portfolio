import type {
  AboutPillar,
  DevProject,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Publication,
  SkillGroup,
} from '../types';
import aboutData from './about.json';
import devProjectsData from './dev-projects.json';
import educationData from './education.json';
import experienceData from './experience.json';
import personalInfoData from './personal-info.json';
import projectsData from './projects.json';
import publicationsData from './publications.json';
import skillsData from './skills.json';

// Os JSON são importados no build; os casts fixam os tipos literais (status, category, icon).
export const personalInfo = personalInfoData as PersonalInfo;
export const about = aboutData as AboutPillar[];
export const education = educationData as Education[];
export const experience = experienceData as Experience[];
export const skills = skillsData as SkillGroup[];
export const projects = projectsData as Project[];
export const publications = publicationsData as Publication[];
export const devProjects = devProjectsData as DevProject[];
