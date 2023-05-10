import { Request, Response } from "express";
import { CreateMovieRentUseCase } from './CreateMovieRentUseCase'


export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { userId, movieId } = req.body

    const createMovieRentUseCase = new CreateMovieRentUseCase()

    await createMovieRentUseCase.create({userId, movieId})

    res.status(201).send
  }
}