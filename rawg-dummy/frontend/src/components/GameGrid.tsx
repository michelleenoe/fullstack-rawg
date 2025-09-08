import useGames from "../lib/hooks/useGames";
    
export const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div>
            {error && <div>Error: {error}</div>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
    };