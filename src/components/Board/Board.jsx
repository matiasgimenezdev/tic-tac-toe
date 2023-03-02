import './Board.css';
import { Cell } from '..';
import { lines } from '../../data/lines';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts';

export const Board = ({ winner, setWinner }) => {
	const { turn, plays } = useContext(GameContext);
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [cells, setCells] = useState([]);

	function checkWinner() {
		for (let i = 0; i <= lines.length - 1; i++) {
			const [a, b, c] = lines[i];
			if (turn === board[a] && turn === board[b] && turn === board[c]) {
				setWinner(turn);
				setCells([a, b, c]);
			}
		}

		if (!winner && plays === 9) {
			console.log(plays, winner);
			setWinner('Draw');
		}
	}

	useEffect(() => {
		setCells([]);
		checkWinner();
	}, [board]);

	useEffect(() => {
		if (!winner) {
			setBoard(['', '', '', '', '', '', '', '', '']);
		}
	}, [winner]);

	return (
		<div className='board'>
			<Cell
				value={board[0]}
				index={0}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[1]}
				index={1}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[2]}
				index={2}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[3]}
				index={3}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[4]}
				index={4}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[5]}
				index={5}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[6]}
				index={6}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[7]}
				index={7}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
			<Cell
				value={board[8]}
				index={8}
				board={board}
				setBoard={setBoard}
				cells={cells}
			/>
		</div>
	);
};
