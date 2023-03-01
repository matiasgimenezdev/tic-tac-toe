import { useContext } from 'react';
import { GameContext } from '../../contexts';
import './Cell.css';

export const Cell = ({ value, coords, board }) => {
	const { turn, setPlays, plays } = useContext(GameContext);
	const { row, column } = coords;
	const currentValue = board[row][column];

	const handleClick = () => {
		if (!currentValue) {
			const newBoard = [...board];
			newBoard[row][column] = turn;
			setPlays(plays + 1);
		}
	};

	return (
		<div className='cell' onClick={handleClick}>
			{value}
		</div>
	);
};
