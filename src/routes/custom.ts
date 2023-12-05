import { AsyncRouter } from "express-async-router";
import { createCustom, deleteCustom, getCustom, getCustomByUID, updateCustom } from "../handlers/custom";



const customRouter = AsyncRouter();

customRouter.post('/',createCustom);
customRouter.get('/',getCustom);
customRouter.get('/:uid',getCustomByUID);
customRouter.patch('/:id',updateCustom);
customRouter.delete('/:id',deleteCustom);


export default customRouter ;