import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetUsersUseCase {
  async index():Promise<User[]>{
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: 'desc'
      },
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true
              }
            }
          }
        }
      }
    })

    return users
  }
}