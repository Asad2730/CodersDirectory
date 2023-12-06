import { AsyncRouter } from "express-async-router";
import userRouter from "./user";
import socialRouter from "./social";
import customRouter from "./custom";
import certificateRouter from "./certification";
import educationRouter from "./education";
import experienceRouter from "./experience";
import interestRouter from "./interest";
import locationRouter from "./location";
import orginizationRouter from "./orginization";
import projectsRouter from "./projects";
import skillsLanguageRouter from "./skillsLanguage";


const router = AsyncRouter();

router.use('/users',userRouter);
router.use('/socials',socialRouter);
router.use('/customs',customRouter);
router.use('/certifications',certificateRouter);
router.use('/educations',educationRouter);
router.use('/experiences',experienceRouter);
router.use('/interests',interestRouter);
router.use('/locations',locationRouter);
router.use('/orginizations',orginizationRouter);
router.use('/projects',projectsRouter);
router.use('/skillLanguages',skillsLanguageRouter);


export default router;