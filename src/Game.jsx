import { useContext, useEffect, useState } from 'react';
import { Board } from './components';
import { GameContext } from './contexts';

export const Game = () => {
	const { turn, setTurn, plays, setPlays } = useContext(GameContext);
	const [winner, setWinner] = useState('');

	useEffect(() => {
		if (turn === 'X') {
			setTurn('O');
		} else {
			setTurn('X');
		}
	}, [plays]);

	const handleRestart = () => {
		setWinner('');
		setPlays(0);
	};

	return (
		<div className='game'>
			<h1 className='title'>TIC TAC TOE</h1>
			<Board setWinner={setWinner} winner={winner} />
			{winner && (
				<span className='winner'>
					{winner} {winner !== 'Draw' && 'wins'}
				</span>
			)}
			{winner && (
				<button className='restart' onClick={handleRestart}>
					Restart
				</button>
			)}
		</div>
	);
};
