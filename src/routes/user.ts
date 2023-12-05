import { AsyncRouter } from "express-async-router";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../handlers/user";


const userRouter = AsyncRouter();

userRouter.post('/',createUser);
userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.patch('/:id',updateUser);
userRouter.delete('/:id',deleteUser);


export default userRouter;