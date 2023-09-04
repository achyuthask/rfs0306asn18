import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ThemeToggle from './components/ThemeToggle';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeToggle />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
