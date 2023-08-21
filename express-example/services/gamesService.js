import gamesData from "./games-data.json" assert { type: "json" };
export default class GamesService {
    #games;

    constructor() {
        this.#games = gamesData;
    }

    async getGames() {
        return new Promise(resolve => resolve(this.#games));
    }
}