import { AsyncRouter } from "express-async-router";
import { createCertification, deleteCertification, getCertification, getCertificationByUID, updateCertification } from "../handlers/certification";




const certificateRouter = AsyncRouter();

certificateRouter.post('/',createCertification);
certificateRouter.get('/',getCertification);
certificateRouter.get('/:uid',getCertificationByUID);
certificateRouter.patch('/:id',updateCertification);
certificateRouter.delete('/:id',deleteCertification);


export default certificateRouter ;