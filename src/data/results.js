const R = '' || 'X' || 'O';
const X = 'X';
const O = 'O';

const XwinningResults = [
	[
		[X, X, X],
		[R, R, R],
		[R, R, R],
	],
	[
		[R, R, R],
		[X, X, X],
		[R, R, R],
	],
	[
		[R, R, R],
		[R, R, R],
		[X, X, X],
	],
	[
		[X, R, R],
		[X, R, R],
		[X, R, R],
	],
	[
		[R, X, R],
		[R, X, R],
		[R, X, R],
	],
	[
		[R, R, X],
		[R, R, X],
		[R, R, X],
	],
	[
		[R, R, X],
		[R, X, R],
		[X, R, R],
	],
	[
		[X, R, R],
		[R, X, R],
		[R, R, X],
	],
];
const OwinningResults = [
	[
		[O, O, O],
		[R, R, R],
		[R, R, R],
	],
	[
		[R, R, R],
		[O, O, O],
		[R, R, R],
	],
	[
		[R, R, R],
		[R, R, R],
		[O, O, O],
	],
	[
		[O, R, R],
		[O, R, R],
		[O, R, R],
	],
	[
		[R, O, R],
		[R, O, R],
		[R, O, R],
	],
	[
		[R, R, O],
		[R, R, O],
		[R, R, O],
	],
	[
		[R, R, O],
		[R, O, R],
		[O, R, R],
	],
	[
		[O, R, R],
		[R, O, R],
		[R, R, O],
	],
];

export { XwinningResults, OwinningResults };
