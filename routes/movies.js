import express from 'express';
import MovieController from '../controllers/MovieController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/page/:page', MovieController.getByPage);
router.get('/mostpopular', MovieController.mostPopular);
router.get('/lastmovies', MovieController.lastMovies);
router.get('/search/:title', MovieController.getByTitle);
router.get('/genre/:showGenre', MovieController.showMoviesGenre);
router.post('/', MovieController.create); //Admin
router.put('/:id', auth, MovieController.update); //Admin
router.delete('/:id', auth, MovieController.delete); //Admin

export default router;