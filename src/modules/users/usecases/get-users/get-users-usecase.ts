import { AppError } from '../../../../errors/AppError'
import { prisma } from '../../../../prisma/client'

export class GetUsersUseCase {
  async execute () {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        posts: true
      }
    })

    if (!users) {
      throw new AppError('There are no users')
    }

    return users
  }
}
