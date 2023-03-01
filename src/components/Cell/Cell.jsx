import { useContext } from 'react';
import { GameContext } from '../../contexts';
import './Cell.css';

export const Cell = ({ value, index, board, setBoard }) => {
	const { turn, gameOver, setPlays, plays } = useContext(GameContext);
	const currentValue = board[index];

	const handleClick = () => {
		if (!currentValue && !gameOver) {
			const newBoard = [...board];
			newBoard[index] = turn;
			setPlays(plays + 1);
			setBoard(newBoard);
		}
	};

	return (
		<div className='cell' onClick={handleClick}>
			{value}
		</div>
	);
};
