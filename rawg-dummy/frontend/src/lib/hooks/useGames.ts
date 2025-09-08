import apiClient from "../../services/api-client";
import { useState, useEffect } from "react";

export interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null);
    
useEffect(() => {
    apiClient
    .get<GameResponse>("/games")
    .then((res) => setGames(res.data.results))
    .catch((err) => {
        setError(err.message);
        console.error(err);
    });
}, []);

return { games, error}
};
export default GameGrid;