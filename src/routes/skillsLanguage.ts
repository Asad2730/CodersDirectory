import { AsyncRouter } from "express-async-router";
import { createSkillsLanguage, deleteSkillsLanguage, getSkillsLanguage, getSkillsLanguageByUID, updateSkillsLanguage } from "../handlers/skillsLanguage";


const skillsLanguageRouter = AsyncRouter();

skillsLanguageRouter.post('/', createSkillsLanguage);
skillsLanguageRouter.get('/', getSkillsLanguage);
skillsLanguageRouter.get('/:uid', getSkillsLanguageByUID);
skillsLanguageRouter.patch('/:id', updateSkillsLanguage);
skillsLanguageRouter.delete('/:id', deleteSkillsLanguage);


export default skillsLanguageRouter;