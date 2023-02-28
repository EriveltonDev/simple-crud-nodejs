import { Router } from "express"
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController"

export const userRouter = Router()

const createUserController = new CreateUserController()

userRouter.post('/', createUserController.handle)
