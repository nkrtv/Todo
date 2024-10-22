import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { TodoProvider } from './contexts/Context';
import { ThemeProvider } from './contexts/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <TodoProvider>
      <ThemeProvider>
        <App /> 
      </ThemeProvider>
    </TodoProvider>
  </React.StrictMode>
);











