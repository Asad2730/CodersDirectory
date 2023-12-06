import { AsyncRouter } from "express-async-router";
import { createInterest, deleteInterest, getInterest, getInterestByUID, updateInterest } from "../handlers/interest";

const interestRouter = AsyncRouter();

interestRouter.post('/', createInterest);
interestRouter.get('/', getInterest);
interestRouter.get('/:uid', getInterestByUID);
interestRouter.patch('/:id', updateInterest);
interestRouter.delete('/:id', deleteInterest);


export default interestRouter;