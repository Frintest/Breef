import './scss/main.scss';

import React from 'react';
import ReactDom from 'react-dom/client';

// components
import App from './components/app/app.js';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
	<App />
);