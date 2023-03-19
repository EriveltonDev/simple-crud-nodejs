import { type Request, type Response } from 'express'
import { GetPostsUseCase } from './get-posts-usecase'

export class GetPostsController {
  async handle (_: Request, response: Response) {
    const getPostsUseCase = new GetPostsUseCase()

    const posts = await getPostsUseCase.execute()

    response.status(200).json(posts)
  }
}
