import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCases";

export class GetMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {

    const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase()

    const result = await getMoviesByReleaseDateUseCase.create()

    return res.status(201).json(result)
  }
}