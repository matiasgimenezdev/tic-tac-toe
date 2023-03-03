import { useContext, useEffect, useState } from 'react';
import { types } from './types';
import { Board } from './components';
import { GameContext } from './contexts';

export const Game = () => {
	const { turn, plays, winner, dispatch } = useContext(GameContext);

	useEffect(() => {
		const action = {
			type: types.changeTurn,
			payload: turn === 'X' ? 'O' : 'X',
		};
		dispatch(action);
	}, [plays]);

	const handleRestart = () => {
		let action = { type: types.resetPlays };
		dispatch(action);
		action = { type: types.setWinner, payload: false };
		dispatch(action);
	};

	const gameOver = () => {
		if (winner) {
			return <span className='winner'>{winner} wins</span>;
		} else {
			if (plays === 9) {
				return <span className='winner'>Draw</span>;
			}
		}
	};

	return (
		<div className='game'>
			<h1 className='title'>TIC TAC TOE</h1>
			<Board winner={winner} />
			{plays < 9 && !winner && (
				<span className='turn'>{turn} plays !</span>
			)}
			{gameOver()}
			{(plays === 9 || winner) && (
				<button className='restart' onClick={handleRestart}>
					Restart
				</button>
			)}
		</div>
	);
};
