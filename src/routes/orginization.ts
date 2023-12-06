import { AsyncRouter } from "express-async-router";
import { createOrganization, deleteOrganization, getOrganization, getOrganizationByUID, updateOrganization } from "../handlers/orginization";

const orginizationRouter = AsyncRouter();

orginizationRouter.post('/', createOrganization);
orginizationRouter.get('/', getOrganization);
orginizationRouter.get('/:uid', getOrganizationByUID);
orginizationRouter.patch('/:id', updateOrganization);
orginizationRouter.delete('/:id', deleteOrganization);


export default orginizationRouter;