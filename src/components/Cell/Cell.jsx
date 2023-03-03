import { useContext } from 'react';
import { GameContext } from '../../contexts';
import { types } from '../../types';

import './Cell.css';

export const Cell = ({ value, index, board, setBoard, cells }) => {
	const { turn, winner, plays, dispatch } = useContext(GameContext);
	const currentValue = board[index];

	const handleClick = () => {
		if (!currentValue && !winner) {
			const newBoard = [...board];
			newBoard[index] = turn;
			const action = { type: types.updatePlays, payload: plays + 1 };
			dispatch(action);
			setBoard(newBoard);
		}
	};

	return (
		<div
			className={`cell ${cells.includes(index) ? 'active' : ''}`}
			onClick={handleClick}
		>
			{value}
		</div>
	);
};
