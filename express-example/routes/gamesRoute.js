import { Router } from 'express';
import GamesController from '../controllers/gamesController.js';
import GamesService from '../services/gamesService.js';
var router = Router();

const gamesController = new GamesController(
    new GamesService()
)

router.get("/games", async (req, res) => {
    gamesController.getGames(req, res);
})

export default router;