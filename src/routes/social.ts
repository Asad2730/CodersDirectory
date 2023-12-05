import { AsyncRouter } from "express-async-router";
import { createSocial, deleteSocial, getSocial, getSocialByUID, updateSocial } from "../handlers/social";




const socialRouter = AsyncRouter();

socialRouter.post('/',createSocial);
socialRouter.get('/',getSocial);
socialRouter.get('/:uid',getSocialByUID);
socialRouter.patch('/:id',updateSocial);
socialRouter.delete('/:id',deleteSocial);


export default socialRouter ;