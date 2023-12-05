import { AsyncRouter } from "express-async-router";
import userRouter from "./user";
import socialRouter from "./social";
import customRouter from "./custom";


const router = AsyncRouter();

router.use('/users',userRouter);
router.use('/socials',socialRouter);
router.use('/customs',customRouter);

export default router;