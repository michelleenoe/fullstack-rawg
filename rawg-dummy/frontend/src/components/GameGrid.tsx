import useGames from "../lib/hooks/useGames";
import GameCard from "./GameCard.tsx";
    
export const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div>
            {error && <div>Error: {error}</div>}
            <ul>
                {games.map((game) => (
                    // <li key={game.id}>{game.name}</li>
                    <GameCard key={game.id} game={game} />
                ))}
            </ul>
        </div>
    );
    };