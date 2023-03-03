import { types } from '../types';

export const GameReducer = (state, action) => {
	switch (action.type) {
		case types.setWinner:
			return {
				...state,
				winner: action.payload,
			};
		case types.updatePlays:
			return { ...state, plays: action.payload };

		case types.resetPlays:
			return { ...state, plays: 0 };

		case types.changeTurn:
			return {
				...state,
				turn: action.payload,
			};

		default:
			return state;
	}
};
