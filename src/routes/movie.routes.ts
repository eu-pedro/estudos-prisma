import { CreateMovieRentController } from "../modules/movies/CreateMovieRente/CreateMovieRentController";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { Router } from "express";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMovieByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController()
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController()
const movieRoutes = Router()

movieRoutes.post('/', createMovieController.handle)
movieRoutes.get('/release', getMoviesByReleaseDateController.handle)
movieRoutes.post('/rent', createMovieRentController.handle)

export { movieRoutes }