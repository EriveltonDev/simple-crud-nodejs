import { Request, Response } from "express"
import { UserService } from "../services/UserService"

const userService = new UserService()

export class UserController {
    async getUsers(_: Request, response: Response) {
        const users = await userService.getAllUsers()
        response.status(200).json(users)
    }

    async createUser(request: Request, response: Response) {
        const body = request.body

        if (!body.email) {
            return response.status(422).json({message: 'email is missing'})
        }

        if (!body.name) {
            return response.status(422).json({message: 'name is missing'})
        }

        await userService.createUser({
            email: body.email,
            name: body.name
        })

        response.status(201).send()
    }

    async deleteUser(request: Request, response: Response) {
        const user_id = request.params.id

        if(!user_id) {
            return response.status(422).json({message: 'user id param is missing'})
        }

        await userService.deleteUser(user_id)

        response.status(200).send()
    }

    async updateUser(request: Request, response: Response) {
        const user_id = request.params.id
        const body = request.body

        if(!user_id) {
            return response.status(422).json({message: 'user id param is missing'})
        }

        if (!body.email) {
            return response.status(422).json({message: 'email is missing'})
        }

        if (!body.name) {
            return response.status(422).json({message: 'name is missing'})
        }

        await userService.updateUser({
            id: user_id,
            name: body.name,
            email: body.email
        })

        response.status(204).send()
    }
}
