import { type Request, type Response } from 'express'
import { CreatePostUseCase } from './create-post-usecase'

export class CreatePostController {
  async handle (request: Request, response: Response) {
    const { content, userID } = request.body

    const createPostUseCase = new CreatePostUseCase()

    const result = await createPostUseCase.execute({
      content,
      userID
    })

    return response.status(201).json(result)
  }
}
