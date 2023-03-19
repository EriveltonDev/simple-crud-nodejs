import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name, email} = request.body

        const createUserUseCase = new CreateUserUseCase()

        const result = await createUserUseCase.execute({
            email,
            name
        })

        return response.status(201).json(result)
    }
}