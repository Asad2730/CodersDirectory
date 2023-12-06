import { AsyncRouter } from "express-async-router";
import { createEducation, deleteEducation, getEducation, getEducationByUID, updateEducation } from "../handlers/education";

const educationRouter = AsyncRouter();

educationRouter.post('/',createEducation);
educationRouter.get('/',getEducation);
educationRouter.get('/:uid',getEducationByUID);
educationRouter.patch('/:id',updateEducation);
educationRouter.delete('/:id',deleteEducation);


export default educationRouter ;