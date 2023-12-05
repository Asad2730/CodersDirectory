import { AsyncRouter } from "express-async-router";
import userRouter from "./user";
import socialRouter from "./social";
import customRouter from "./custom";
import certificateRouter from "./certification";


const router = AsyncRouter();

router.use('/users',userRouter);
router.use('/socials',socialRouter);
router.use('/customs',customRouter);
router.use('/certifications',certificateRouter)

export default router;