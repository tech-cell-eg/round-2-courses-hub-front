import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CartProvider } from './context/CartContext';
import { CourseCartProvider } from './context/CourseCartContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CourseCartProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CourseCartProvider>
  </StrictMode>
);
