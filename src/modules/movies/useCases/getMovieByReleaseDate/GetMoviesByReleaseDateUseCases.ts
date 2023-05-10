import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMoviesByReleaseDateUseCase {
  async create(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: "desc"
      }
    })

    return movies
  }
}