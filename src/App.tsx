import React from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import { AppProvider } from './Store/context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Products />
      </div>
    </AppProvider>
  );
}

export default App;
