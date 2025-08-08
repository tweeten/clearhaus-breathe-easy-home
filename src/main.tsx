import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Performance monitoring
if (import.meta.env.DEV) {
  console.log('🚀 ClearHaus App Loading...');
}

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
