import { Router } from 'express'
import { postRouter } from './postRoutes'
import { userRouter } from './userRoutes'

export const routes = Router()

routes.use('/user', userRouter)
routes.use('/post', postRouter)
