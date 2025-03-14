import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/queryClient';
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
      </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

 