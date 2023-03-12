import { Router } from "express"
import { CreatePostController } from "../modules/posts/useCases/CreatePostController"

export const postRouter = Router()

const createPostController = new CreatePostController()

postRouter.post('/', createPostController.handle)
