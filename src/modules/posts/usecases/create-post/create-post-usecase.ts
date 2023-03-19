import { AppError } from "../../../../errors/AppError"
import { prisma } from "../../../../prisma/client"
import { CreatePostDTO } from "../../dtos/CreatePostDTO"

export class CreatePostUseCase {
  async execute({ content, user_id }: CreatePostDTO) {

    const userExist = await prisma.user.findUnique({
      where: {
        id: user_id
      }
    })

    if (!userExist) {
      throw new AppError('Usuário não existe')
    }

    const post = prisma.post.create({
      data: {
        content,
        author_id: user_id
      }
    })

    return post
  }
}