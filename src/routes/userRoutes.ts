import { Router } from 'express'
import { CreateUserController } from '../modules/users/usecases/create-user/create-user-controller'
import { GetUsersController } from '../modules/users/usecases/get-users/get-users-controller'

export const userRouter = Router()

const createUserController = new CreateUserController()
const getUsersController = new GetUsersController()

userRouter.post('/', createUserController.handle)
userRouter.get('/all', getUsersController.handle)
