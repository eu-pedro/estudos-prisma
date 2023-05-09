import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class CreateMovieUseCases {
  async create ({title, duration, release_date}: CreateMovieDTO):Promise<Movie>{
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title
      }
    })

    if(movieAlreadyExists) {
      throw new AppError("Movie already exists")
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date
      }
    })

    return movie;
  } 
}