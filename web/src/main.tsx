import './index.css';
import './styles/global.scss';

import { Routing } from './routes';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(<Routing />);
