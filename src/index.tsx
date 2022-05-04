import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.scss';

const app: HTMLElement = document.getElementById('app');

const root = ReactDOM.createRoot(app);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);