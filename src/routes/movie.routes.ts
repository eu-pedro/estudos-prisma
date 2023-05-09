import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { Router } from "express";

const createMovieController = new CreateMovieController();
const movieRoutes = Router()

movieRoutes.post('/', createMovieController.handle)

export { movieRoutes }