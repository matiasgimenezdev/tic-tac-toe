import './Board.css';
import { Cell } from '..';
import { lines } from '../../data/lines';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts';

export const Board = ({ winner, setWinner }) => {
	const { gameOver, turn, plays } = useContext(GameContext);
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

	function checkWinner() {
		let i = 0;
		for (i; i <= lines.length - 1; i++) {
			const [a, b, c] = lines[i];
			if (turn === board[a] && turn === board[b] && turn === board[c]) {
				setWinner(turn);
			}
		}

		if (!winner && plays === 9) {
			setWinner('Draw');
		}
	}

	useEffect(() => {
		checkWinner();
	}, [board]);

	useEffect(() => {
		if (gameOver) {
			setBoard(['', '', '', '', '', '', '', '', '']);
		}
	}, [gameOver]);

	return (
		<div className='board'>
			<Cell
				value={board[0]}
				index={0}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[1]}
				index={1}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[2]}
				index={2}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[3]}
				index={3}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[4]}
				index={4}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[5]}
				index={5}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[6]}
				index={6}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[7]}
				index={7}
				board={board}
				setBoard={setBoard}
			/>
			<Cell
				value={board[8]}
				index={8}
				board={board}
				setBoard={setBoard}
			/>
		</div>
	);
};
