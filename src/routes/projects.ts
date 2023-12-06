import { AsyncRouter } from "express-async-router";
import { createProject, deleteProject, getProjectByUID, getProjects, updateProject } from "../handlers/projects";

const projectsRouter = AsyncRouter();

projectsRouter.post('/', createProject);
projectsRouter.get('/', getProjects);
projectsRouter.get('/:uid', getProjectByUID);
projectsRouter.patch('/:id', updateProject);
projectsRouter.delete('/:id', deleteProject);


export default projectsRouter;