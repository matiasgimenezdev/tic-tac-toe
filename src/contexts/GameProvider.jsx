import { useReducer } from 'react';
import { GameContext } from './GameContext';
import { GameReducer } from './GameReducer';

const setInitialTurn = () => {
	const random = Math.round(Math.random() + 0.1);
	if (random === 1) {
		return 'X';
	} else {
		return 'O';
	}
};

const gameInitialState = {
	winner: false,
	turn: setInitialTurn(),
	plays: 0,
};

export const GameProvider = ({ children }) => {
	const [gameState, dispatch] = useReducer(GameReducer, gameInitialState);
	const { turn, plays, winner } = gameState;

	return (
		<GameContext.Provider
			value={{
				turn,
				plays,
				winner,
				dispatch,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
