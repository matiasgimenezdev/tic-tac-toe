import { useContext, useEffect, useState } from 'react';
import { Board } from './components';
import { GameContext } from './contexts';

export const Game = () => {
	const { turn, setTurn, plays, setGameOver } = useContext(GameContext);
	const [winner, setWinner] = useState('');

	useEffect(() => {
		if (turn === 'X') {
			setTurn('O');
		} else {
			setTurn('X');
		}
	}, [plays]);

	useEffect(() => {
		if (winner) {
			setGameOver(true);
		}
	}, [winner]);

	return (
		<div className='game'>
			<h1 className='title'>TIC TAC TOE</h1>
			<Board setWinner={setWinner} />
			{winner && <span style={{ color: 'white' }}>{winner}</span>}
		</div>
	);
};
