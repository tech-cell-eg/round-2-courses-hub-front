import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CartProvider } from './context/CartContext';
import { CourseCartProvider } from './context/CourseCartContext';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CourseCartProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CourseCartProvider>
    </AuthProvider>
  </StrictMode>
);
