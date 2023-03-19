import { AppError } from '../../../../errors/AppError'
import { prisma } from '../../../../prisma/client'

export class GetPostsUseCase {
  async execute () {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        author: true
      }
    })

    if (!posts.length) {
      throw new AppError('There are no posts')
    }

    return posts
  }
}
