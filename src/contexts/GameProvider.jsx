import { useState } from 'react';
import { GameContext } from './GameContext';

export const GameProvider = ({ children }) => {
	const [gameOver, setGameOver] = useState(false);
	const [turn, setTurn] = useState('X');
	const [plays, setPlays] = useState(0);

	return (
		<GameContext.Provider
			value={{ turn, setTurn, plays, setPlays, gameOver, setGameOver }}
		>
			{children}
		</GameContext.Provider>
	);
};
