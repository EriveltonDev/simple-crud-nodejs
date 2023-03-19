import { AppError } from '../../../../errors/AppError'
import { prisma } from '../../../../prisma/client'
import { type CreateUserDTO } from '../../dtos/CreateUserDTO'

export class CreateUserUseCase {
  async execute ({ email, name }: CreateUserDTO) {
    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      throw new AppError('User already exists')
    }

    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return user
  }
}
