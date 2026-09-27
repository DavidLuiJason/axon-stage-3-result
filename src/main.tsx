import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerTestCapability } from './capabilities/registerTestCapability';
import { registerTestInterface } from './interfaces/registerTestInterface';

// Stage 2: explicit capability registration at startup (not React mount)
registerTestCapability();
// Stage 3: explicit interface registration at startup (not React mount)
registerTestInterface();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
