import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameProvider } from './contexts';
import { Game } from './Game';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GameProvider>
			<Game />
		</GameProvider>
	</React.StrictMode>
);
