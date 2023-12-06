import { AsyncRouter } from "express-async-router";
import { createLocation, deleteLocation, getLocation, getLocationByUID, updateLocation } from "../handlers/location";


const locationRouter = AsyncRouter();

locationRouter.post('/', createLocation);
locationRouter.get('/', getLocation);
locationRouter.get('/:uid', getLocationByUID);
locationRouter.patch('/:id', updateLocation);
locationRouter.delete('/:id', deleteLocation);


export default locationRouter;