import { Request, Response } from "express";
import { CreateMovieUseCases } from "./CreateMovieUseCases";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, duration, release_date } = req.body

    const createMovieUseCase = new CreateMovieUseCases()

    const result = await createMovieUseCase.create({title, duration, release_date})

    return res.status(201).json(result)
  }
}