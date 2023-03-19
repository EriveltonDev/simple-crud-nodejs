import { AppError } from '../../../../errors/AppError'
import { prisma } from '../../../../prisma/client'
import { type CreatePostDTO } from '../../dtos/CreatePostDTO'

export class CreatePostUseCase {
  async execute ({ content, userID }: CreatePostDTO) {
    const userExist = await prisma.user.findUnique({
      where: {
        id: userID
      }
    })

    if (!userExist) {
      throw new AppError('Usuário não existe')
    }

    const post = prisma.post.create({
      data: {
        content,
        author_id: userID
      }
    })

    return await post
  }
}
