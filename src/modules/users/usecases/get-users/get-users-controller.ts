import { type Request, type Response } from 'express'
import { GetUsersUseCase } from './get-users-usecase'

export class GetUsersController {
  async handle (_: Request, response: Response) {
    const getUsersUseCase = new GetUsersUseCase()
    const users = await getUsersUseCase.execute()

    response.status(200).json(users)
  }
}
