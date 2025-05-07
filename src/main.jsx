import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import RouterComponents from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterComponents />
    </React.StrictMode>
);
