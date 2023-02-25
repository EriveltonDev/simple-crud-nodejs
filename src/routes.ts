import { Router } from "express"
import { UserController } from "./controllers/UserController"

export const router = Router()

const userController = new UserController()

router.get('/users', userController.getUsers)
router.post('/users', userController.createUser)
router.delete('/users/:id', userController.deleteUser)
router.patch('/users/:id', userController.updateUser)
