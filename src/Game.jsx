import { useContext, useEffect, useState } from 'react';
import { Board } from './components';
import { GameContext } from './contexts';

export const Game = () => {
	const { turn, setTurn, plays, gameOver, setGameOver } =
		useContext(GameContext);
	const [winner, setWinner] = useState('');

	useEffect(() => {
		if (turn === 'X') {
			setTurn('O');
		} else {
			setTurn('X');
		}
	}, [plays]);

	useEffect(() => {
		setGameOver(true);
	}, [winner]);

	return (
		<div className='game'>
			<h1 className='title'>TIC TAC TOE</h1>
			<Board setWinner={setWinner} />
			{winner && <span>{winner}</span>}
		</div>
	);
};
