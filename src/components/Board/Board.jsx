import './Board.css';
import { Cell } from '..';
import { XwinningResults, OwinningResults } from '../../data/results';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts';

export const Board = ({ winner, setWinner }) => {
	const { gameOver, turn, plays } = useContext(GameContext);
	const [board, setBoard] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	]);

	function checkResult(results) {
		results.map((result) => {
			console.log(result, board);
			console.log(result === board);
			console.log(turn);
			if (result === board) {
				setWinner(turn);
			}
		});
	}

	function checkWinner() {
		if (turn === 'O') {
			checkResult(OwinningResults);
		} else {
			checkResult(XwinningResults);
		}

		if ((winner === '') & (plays === 9)) {
			setWinner(true);
		}
	}

	useEffect(() => {
		console.log(plays);
		checkWinner();
	}, [plays]);

	useEffect(() => {
		if (gameOver) {
			setBoard([
				['', '', ''],
				['', '', ''],
				['', '', ''],
			]);
		}
	}, [gameOver]);

	return (
		<div className='board'>
			<Cell
				value={board[0][0]}
				coords={{ row: 0, column: 0 }}
				board={board}
			/>
			<Cell
				value={board[0][1]}
				coords={{ row: 0, column: 1 }}
				board={board}
			/>
			<Cell
				value={board[0][2]}
				coords={{ row: 0, column: 2 }}
				board={board}
			/>
			<Cell
				value={board[1][0]}
				coords={{ row: 1, column: 0 }}
				board={board}
			/>
			<Cell
				value={board[1][1]}
				coords={{ row: 1, column: 1 }}
				board={board}
			/>
			<Cell
				value={board[1][2]}
				coords={{ row: 1, column: 2 }}
				board={board}
			/>
			<Cell
				value={board[2][0]}
				coords={{ row: 2, column: 0 }}
				board={board}
			/>
			<Cell
				value={board[2][1]}
				coords={{ row: 2, column: 1 }}
				board={board}
			/>
			<Cell
				value={board[2][2]}
				coords={{ row: 2, column: 2 }}
				board={board}
			/>
		</div>
	);
};
