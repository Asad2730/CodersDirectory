import { AsyncRouter } from "express-async-router";
import { createExperience, deleteExperience, getExperience, getExperienceByUID, updateExperience } from "../handlers/experience";

const experienceRouter = AsyncRouter();

experienceRouter.post('/', createExperience);
experienceRouter.get('/', getExperience);
experienceRouter.get('/:uid', getExperienceByUID);
experienceRouter.patch('/:id', updateExperience);
experienceRouter.delete('/:id', deleteExperience);


export default experienceRouter ;