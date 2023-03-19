import { Router } from "express"
import { CreatePostController } from "../modules/posts/usecases/create-post/create-post-controller"
import { GetPostsController } from "../modules/posts/usecases/get-posts/get-posts-controller"

export const postRouter = Router()

const createPostController = new CreatePostController()
const getPostsController = new GetPostsController()

postRouter.post('/', createPostController.handle)
postRouter.get('/all', getPostsController.handle)
