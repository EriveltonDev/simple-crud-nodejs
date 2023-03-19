import { Request, Response } from "express";
import { CreatePostUseCase } from "./create-post-usecase";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const {content, user_id} = request.body

    const createPostUseCase = new CreatePostUseCase()

    const result = await createPostUseCase.execute({
      content,
      user_id
    })

    return response.status(201).json(result)
  }
}