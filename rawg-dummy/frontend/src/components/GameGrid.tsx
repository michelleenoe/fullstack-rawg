import apiClient from "../services/api-client";
import { useState, useEffect } from "react";


interface Game {
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

    
    return (
        <div>
            {error && <div>Error: {error}</div>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    ) 
    };