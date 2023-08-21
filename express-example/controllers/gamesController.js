export default class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }

    async getGames(req, res) {
        try {
            const games = await this.gamesService.getGames();
            res.status(200).json(games);
        }
        catch (err) {
            const errorResponse = {errorMessage:"Failed to get games list"}
            res.status(500).json(errorResponse);
        }
    }
}